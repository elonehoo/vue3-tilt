# vue3 tilt

> Add Tilt-Effect to your elements, based on vanilla-tilt.js

<p>
  <a href="https://www.npmjs.com/package/vue3-tilt"><img src="https://img.shields.io/npm/v/vue3-tilt?color=43B36B&label="></a>
<p>

```vue
<template>
  <div
   v-tilt="{speed: 500, perspective: 1200}"
   class="flex h-[300px] w-[300px] content-center items-center justify-center rounded-xl bg-gradient-to-tl from-violet-500 to-fuchsia-500 preserve-3d"
   style="boxShadow:0 48px 60px 0 rgba(2,14,26,0.24);"
  >
    <h2 class="text-20px" style="transform:rotateZ('60px')">
      Developed using
      <a class="text-#fff hover:text-#fff" href="https://github.com/micku7zu/vanilla-tilt.js">
        vanilla-tilt
      </a>
    </h2>
  </div>
</template>
```

## Credits

Thanks to:

- [@vanderb/vue-tilt](https://github.com/vanderb/vue-tilt.js)
- [@micku7zu/vanilla-tilt.js](https://github.com/micku7zu/vanilla-tilt.js)
- [@gijsroge/tilt.js](https://github.com/gijsroge/tilt.js)
- [@jonathandion/react-tilt](https://github.com/jonathandion/react-tilt)
