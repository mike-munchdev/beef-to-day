import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

import { backgrounds, fonts, images } from "./src/asset";
import Navigation from "./src/navigation";
import { SplashLoader } from "./src/components/SplashLoader";

export default () => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await cacheFonts(fonts);
        await cacheImages([...backgrounds, ...images]);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const cacheFonts = useCallback(async (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
  }, []);

  const cacheImages = useCallback(async (images) => {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }, []);

  if (!appIsReady) return <SplashLoader />;

  return <Navigation />;
};
