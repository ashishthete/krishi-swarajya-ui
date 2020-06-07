// tslint:disable:max-line-length

import { h, VNode } from 'futura-dom';

export const account = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 24 24' } }, [
    path('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z')
  ]);

export const logout = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 24 24' } }, [
    path('M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z')
  ]);

export const feed = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 24 24' } }, [
    path('M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z'),
    path('M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z')
  ]);

export const crop = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 511.999 511.999' } }, [
    path('M507.5 42.398a15.365 15.365 0 00-11.637-4.476c-12.638.642-124.955 7.739-176.003 58.787-38.788 38.788-47.46 92.882-23.448 130.775-18.481 18.033-32.86 39.457-42.502 62.905a95.02 95.02 0 00-9.508-15.564 98.761 98.761 0 00-20.229-20.052c3.968-16.998 1.637-35.056-6.908-51.994-10.272-20.365-28.702-37.093-51.897-47.105-24.035-10.376-56.871-12.259-97.591-5.588-30.215 4.948-54.704 13.108-57.402 14.024-4.087 1.39-7.414 4.458-9.125 8.421s-1.666 8.488.129 12.428c1.182 2.588 12.043 26.012 29.159 51.387 23.075 34.208 46.963 56.815 70.998 67.192 14.027 6.055 28.513 8.922 42.433 8.922 26.914 0 51.689-10.732 66.847-29.871a69.276 69.276 0 019.551 10.323c5.888 7.824 9.984 17.028 12.176 27.355l7.394 34.848a189.948 189.948 0 00-.136 6.8v97.146c0 8.305 6.733 15.038 15.038 15.038s15.038-6.733 15.038-15.038v-97.146c0-42.519 16.971-82.789 46.963-112.353 15.107 11.254 33.57 16.796 52.865 16.796 28.84 0 59.508-12.339 83.485-36.316 51.064-51.064 58.147-163.365 58.786-175.997a15.374 15.374 0 00-4.476-11.647zm-314.965 212.67l-.009.022-.005.013c-11.024 25.54-46.494 34.878-79.063 20.818-31.217-13.476-60.819-57.559-77.168-88.263 33.563-9.162 85.939-17.849 117.158-4.372 16.734 7.223 29.861 18.956 36.963 33.037 6.544 12.974 7.297 26.732 2.124 38.745zm239.391-46.294c-31.584 31.586-77.647 36.917-102.682 11.883-25.458-25.458-20.238-70.56 11.883-102.681C375.11 83.993 447.57 72.781 480.556 69.348c-3.428 32.977-14.636 105.431-48.63 139.426z'),
    path('M436.587 113.313c-5.872-5.872-15.394-5.872-21.267 0l-56.727 56.728c-5.873 5.872-5.873 15.394 0 21.267 2.937 2.937 6.785 4.405 10.634 4.405s7.698-1.469 10.633-4.405l56.727-56.728c5.873-5.872 5.873-15.394 0-21.267zM157.976 223.809l-60.87-26.276c-7.623-3.291-16.475.222-19.766 7.846-3.291 7.625.222 16.476 7.847 19.768l60.87 26.276a14.996 14.996 0 005.953 1.235c5.82 0 11.361-3.4 13.814-9.082 3.29-7.626-.223-16.475-7.848-19.767z')
  ]);

export const help = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 36 36' } }, [
    path('M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z'),
    path('M18.29 8.92a7.38 7.38 0 0 0-5.72 2.57 1 1 0 0 0-.32.71.92.92 0 0 0 .95.92 1.08 1.08 0 0 0 .71-.29 5.7 5.7 0 0 1 4.33-2c2.36 0 3.83 1.52 3.83 3.41v.05c0 2.21-1.76 3.44-4.54 3.65a.8.8 0 0 0-.76.92v2.75a1 1 0 0 0 1 .9h.11a1 1 0 0 0 .9-1v-2.06c3-.42 5.43-2 5.43-5.28v-.05c-.03-3-2.37-5.2-5.92-5.2z'),
    circle({cx: 17.78, cy: 26.2, r: 1.25, fill: 'currentColor'}),
    path('M0 0h36v36H0z', 'none')
  ]);

const path = (d: string, fill: string = 'currentColor'): VNode =>
  h(`path`, {
    attrs: { fill, d }
  });

const circle = (attrs): VNode =>
  h(`circle`, {
    attrs
  });
