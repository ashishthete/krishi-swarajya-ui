// tslint:disable:max-line-length

import { h, VNode } from 'futura-dom';

export const block = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 20 21' } }, [
    path('M18.947 4.06l-8.667-4c-.178-.082-.382-.082-.56 0l-8.667 4c-.236.11-.387.346-.386.607V16c0 .26.15.497.386.607l8.667 4c.178.082.382.082.56 0l8.667-4c.236-.11.387-.347.386-.607V4.667c0-.26-.15-.498-.386-.607zM10 1.4l7.073 3.267L10 7.933 2.927 4.667 10 1.4zM2 5.707l7.333 3.386v9.867L2 15.573V5.707zm8.667 13.253V9.093L18 5.707v9.866l-7.333 3.387z')
  ]);

export const building = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 20 20' } }, [
    path('M18.667 3.333h-5.334v1.334h5.334v14h-5.334V20H20V4.667c0-.737-.597-1.334-1.333-1.334zM11.253 0H2.08C1.3 0 .667.633.667 1.413V20h12V1.413c0-.78-.633-1.413-1.414-1.413zm.08 18.667h-2v-2H4v2H2V1.413c0-.02.008-.04.023-.056.015-.015.036-.024.057-.024h9.173c.022 0 .042.01.057.024.015.015.023.035.023.056v17.254z'),
    path('M3.333 3.333h1.333v1.333H3.333zm2.667 0h1.333v1.333H6zm2.667 0H10v1.333H8.667zM3.333 6.667h1.333V8H3.333zm2.667 0h1.333V8H6zm2.667 0H10V8H8.667zM3.333 10h1.333v1.333H3.333zM6 10h1.333v1.333H6zm2.667 0H10v1.333H8.667zm-5.334 3.333h1.333v1.333H3.333zm2.667 0h1.333v1.333H6zm2.667 0H10v1.333H8.667zm4.666-6.666h1.333V8h-1.333zm2.667 0h1.333V8H16zM13.333 10h1.333v1.333h-1.333zM16 10h1.333v1.333H16zm-2.667 3.333h1.333v1.333h-1.333zm2.667 0h1.333v1.333H16z')
  ]);

export const check = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 36 36' } }, [
    path('M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z')
  ]);

export const cog = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 22 22' } }, [
    path('M11.067 6.333C8.467 6.333 6.4 8.4 6.4 11c0 2.6 2.067 4.667 4.667 4.667 2.6 0 4.666-2.067 4.666-4.667 0-2.6-2.066-4.667-4.666-4.667zm0 8c-1.867 0-3.334-1.466-3.334-3.333 0-1.867 1.467-3.333 3.334-3.333 1.866 0 3.333 1.466 3.333 3.333 0 1.867-1.467 3.333-3.333 3.333z'),
    path('M20.867 8.8L19 8.2l-.4-1 .933-1.733c.2-.4.134-.934-.2-1.267l-1.6-1.6c-.333-.333-.866-.4-1.266-.2l-1.734.933-1-.4-.6-1.866c-.133-.4-.533-.734-1-.734H9.867c-.467 0-.867.334-.934.8L8.333 3c-.4.067-.733.2-1.066.4l-1.734-.933c-.4-.2-.933-.134-1.266.2l-1.6 1.6c-.334.333-.4.866-.2 1.266L3.333 7.2c-.133.333-.266.733-.4 1.067l-1.866.6c-.4.133-.734.533-.734 1v2.266c0 .467.334.867.8 1l1.867.6.4 1-.933 1.734c-.2.4-.134.933.2 1.266l1.6 1.6c.333.334.866.4 1.266.2l1.734-.933 1 .4.6 1.933c.133.4.533.734 1 .734h2.266c.467 0 .867-.334 1-.734l.6-1.933 1-.4 1.734.933c.4.2.933.134 1.266-.2l1.6-1.6c.334-.333.4-.866.2-1.266l-.933-1.734.4-1 1.933-.6c.4-.133.734-.533.734-1V9.867c0-.467-.334-.934-.8-1.067zm-.534 3.133l-2.4.734-.066.333-.6 1.4-.2.333 1.2 2.2-1.334 1.334-2.2-1.2-.333.2c-.467.266-.933.466-1.4.6l-.333.066-.734 2.4h-1.866l-.734-2.4L9 17.867l-1.4-.6-.333-.2-2.2 1.2-1.334-1.334 1.2-2.2-.2-.333c-.266-.467-.466-.933-.6-1.4l-.066-.333-2.4-.734v-1.866L3.933 9.4l.134-.333c.133-.534.333-1 .6-1.467l.2-.333-1.134-2.2 1.334-1.334 2.133 1.2.333-.2c.467-.266.934-.466 1.467-.6L9.333 4l.734-2.333h1.866L12.667 4l.333.133c.467.134.933.334 1.4.6l.333.2 2.2-1.2 1.334 1.334-1.2 2.2.2.333c.266.467.466.933.6 1.4l.066.333 2.4.734v1.866z')
  ]);

export const idBadge = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 16 22' } }, [
    path('M8 13.667c1.557 0 2.82-1.263 2.82-2.82 0-1.558-1.263-2.82-2.82-2.82s-2.82 1.262-2.82 2.82c0 1.557 1.263 2.82 2.82 2.82zm0-4.574c.968 0 1.753.785 1.753 1.754 0 .968-.785 1.753-1.753 1.753-.968 0-1.753-.785-1.753-1.753 0-.97.785-1.754 1.753-1.754zm2.667-7.426c0-.737-.597-1.334-1.334-1.334H6.667c-.737 0-1.334.597-1.334 1.334v4.666h5.334V1.667zM9.333 5H6.667V1.667h2.666V5zm4 14v-1.533c.002-.178-.06-.35-.173-.487-1.31-1.46-3.2-2.26-5.16-2.187-1.963-.068-3.854.74-5.16 2.207-.113.137-.175.31-.173.487V19h1.066v-1.42C4.84 16.417 6.396 15.79 8 15.86c1.605-.07 3.16.56 4.267 1.727V19h1.066z'),
    path('M14.667 3H12v1.333h2.667v16H1.333v-16H4V3H1.333C.597 3 0 3.597 0 4.333v16c0 .737.597 1.334 1.333 1.334h13.334c.736 0 1.333-.597 1.333-1.334v-16C16 3.597 15.403 3 14.667 3z')
  ]);

export const organisation = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 22 20' } }, [
    path('M5.533 10.533h10.934v2.054h1.066v-3.12h-6V7.333h-1.066v2.134h-6v3.12h1.066m2.8.746H1.667c-.737 0-1.334.597-1.334 1.334v4C.333 19.403.93 20 1.667 20h6.666c.737 0 1.334-.597 1.334-1.333v-4c0-.737-.597-1.334-1.334-1.334zm-6.666 5.334v-4h6.666v4H1.667zm18.666-5.334h-6.666c-.737 0-1.334.597-1.334 1.334v4c0 .736.597 1.333 1.334 1.333h6.666c.737 0 1.334-.597 1.334-1.333v-4c0-.737-.597-1.334-1.334-1.334zm-6.666 5.334v-4h6.666v4h-6.666zm-6-12h6.666c.737 0 1.334-.597 1.334-1.334v-4C15.667.597 15.07 0 14.333 0H7.667C6.93 0 6.333.597 6.333 1.333v4c0 .737.597 1.334 1.334 1.334zm0-5.334h6.666v4H7.667v-4z')
  ]);

export const power = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 20 21' } }, [
    path('M10 12c-.368 0-.667-.298-.667-.667V.667c0-.37.3-.667.667-.667.368 0 .667.298.667.667v10.666c0 .37-.3.667-.667.667z'),
    path('M10 20.767c-4.533.01-8.506-3.03-9.682-7.407-1.176-4.377.74-9 4.67-11.26.315-.166.706-.052.885.257.18.31.082.705-.22.896C2.256 5.215.6 9.213 1.615 13.003c1.016 3.788 4.45 6.423 8.372 6.423 3.922 0 7.356-2.635 8.37-6.424 1.016-3.79-.64-7.787-4.037-9.75-.217-.112-.354-.336-.358-.58-.003-.245.128-.472.342-.592.214-.12.476-.11.683.02 3.928 2.26 5.844 6.883 4.67 11.26-1.177 4.378-5.15 7.418-9.684 7.407H10z')
  ]);

export const signOut = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 20 20' } }, [
    path('M1.667 2h10.666v6.533h1.334V2c0-.736-.597-1.333-1.334-1.333H1.667C.93.667.333 1.264.333 2v16c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333h-12V2z'),
    path('M15.773 9.52c-.264-.227-.658-.21-.905.035-.246.246-.26.64-.035.905l2.254 2.207H7.42c-.368 0-.667.298-.667.666 0 .37.3.667.667.667h9.667l-2.254 2.307c-.19.163-.273.418-.214.662.054.24.245.43.49.49.242.06.5-.026.66-.216l3.894-3.867-3.894-3.86z')
  ]);

export const users = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 36 36' } }, [
    path('M17.9 17.3c2.7 0 4.8-2.2 4.8-4.9s-2.2-4.8-4.9-4.8S13 9.8 13 12.4c0 2.7 2.2 4.9 4.9 4.9zm-.1-7.7c.1 0 .1 0 0 0 1.6 0 2.9 1.3 2.9 2.9s-1.3 2.8-2.9 2.8c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.9 2.8-2.9zm14.9 7.1c-1.9-1.7-4.4-2.6-7-2.5h-.8c-.2.8-.5 1.5-.9 2.1.6-.1 1.1-.1 1.7-.1 1.9-.1 3.8.5 5.3 1.6V25h2v-8l-.3-.3zm-9.3-8.9c.5-1.2 1.9-1.8 3.2-1.3 1.2.5 1.8 1.9 1.3 3.2-.4.9-1.3 1.5-2.2 1.5-.2 0-.5 0-.7-.1.1.5.1 1 .1 1.4v.6c.2 0 .4.1.6.1 2.5 0 4.5-2 4.5-4.4 0-2.5-2-4.5-4.4-4.5-1.6 0-3 .8-3.8 2.2.5.3 1 .7 1.4 1.3zM12 16.4c-.4-.6-.7-1.3-.9-2.1h-.8c-2.6-.1-5.1.8-7 2.4L3 17v8h2v-7.2c1.6-1.1 3.4-1.7 5.3-1.6.6 0 1.2.1 1.7.2zm-1.7-3.3c.2 0 .4 0 .6-.1v-.6c0-.5 0-1 .1-1.4-.2.1-.5.1-.7.1-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1 0 1.9.6 2.3 1.5.4-.5 1-1 1.5-1.4-1.3-2.1-4-2.8-6.1-1.5-2.1 1.3-2.8 4-1.5 6.1.8 1.3 2.2 2.1 3.8 2.1zm15.8 9.6l-.2-.3c-2-2.2-4.8-3.5-7.8-3.4-3-.1-5.9 1.2-7.9 3.4l-.2.3v7.6c0 .9.7 1.7 1.7 1.7h12.8c.9 0 1.7-.8 1.7-1.7v-7.6zm-2 7.3H12v-6.6c1.6-1.6 3.8-2.4 6.1-2.4 2.2-.1 4.4.8 6 2.4V30z')
  ]);

export const videoCamera = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 36 36' } }, [
    path('M34 10.34a2.11 2.11 0 0 0-1.16-1.9 2 2 0 0 0-2.13.15L26 11.6V8a2 2 0 0 0-2-2H6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h18a2 2 0 0 0 2-2v-3.6l4.64 3a2.07 2.07 0 0 0 2.2.2A2.11 2.11 0 0 0 34 25.66zm-2.07 15.43c-.06 0-.11 0-.19-.06L24 20.77V28H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18v7.23l7.8-5a.11.11 0 0 1 .13 0 .11.11 0 0 1 .07.11v15.32a.11.11 0 0 1-.07.11z')
  ]);

export const help = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 36 36' } }, [
    path('M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z'),
    path('M18.29 8.92a7.38 7.38 0 0 0-5.72 2.57 1 1 0 0 0-.32.71.92.92 0 0 0 .95.92 1.08 1.08 0 0 0 .71-.29 5.7 5.7 0 0 1 4.33-2c2.36 0 3.83 1.52 3.83 3.41v.05c0 2.21-1.76 3.44-4.54 3.65a.8.8 0 0 0-.76.92v2.75a1 1 0 0 0 1 .9h.11a1 1 0 0 0 .9-1v-2.06c3-.42 5.43-2 5.43-5.28v-.05c-.03-3-2.37-5.2-5.92-5.2z'),
    circle({cx: 17.78, cy: 26.2, r: 1.25, fill: 'currentColor'}),
    path('M0 0h36v36H0z', 'none')
  ]);

export const newTag = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 36 36' } }, [
    path('M34.6 23l-4-5 4-4.9a1.8 1.8 0 0 0 .1-2A2 2 0 0 0 33 10H2A2 2 0 0 0 0 11.9V24A2 2 0 0 0 2 26h31a2 2 0 0 0 1.8-1 1.8 1.8 0 0 0-.2-2zM2 24V12h30.8l-4.9 6 5 6z'),
    path('M9.4 19.4L6.1 15H5v6.2h1.1v-4.4l3.3 4.4h1.1V15H9.4v4.4z'),
    path('M12.2 21.2h4.6v-1h-3.5v-1.6h3.2v-1.1h-3.2V16h3.5v-1h-4.6v6.2z'),
    path('M24.5 19.4L23.1 15h-1.3l-1.4 4.4-1.3-4.4h-1.3l2 6.2h1.1l1.5-4.6 1.6 4.6h1.1l2-6.2h-1.2l-1.4 4.4z'),
    path('M0 0h36v36H0z', 'none')
  ]);

export const plus = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 24 24' } }, [
    path('M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'),
    path('M0 0h24v24H0V0z', 'none')
  ]);

export const minus = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 24 24' } }, [
    path('M19 13H5v-2h14v2z'),
    path('M0 0h24v24H0V0z', 'none')
  ]);

export const warningStandard = (className?: string): VNode =>
  h(`svg`, { attrs: { class: className, viewBox: '0 0 36 36' } }, [
    circle({cx: 18, cy: 26.06, r: 1.33, fill: 'currentColor'}),
    path('M18 23a1 1 0 0 1-1-1V10a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1z'),
    path('M15 2a3 3 0 0 1 6 0l14 25a3 3 0 0 1-3 5H4a3 3 0 0 1-3-5L15 2zM3 28a1 1 0 0 0 1 2h28a1 1 0 0 0 1-2L19 3a1 1 0 0 0-2 0L3 28z'),
    path('M18 23a1 1 0 0 1-1-1V10a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1z', 'none')
  ]);

const path = (d: string, fill: string = 'currentColor'): VNode =>
  h(`path`, {
    attrs: { fill, d }
  });

const circle = (attrs): VNode =>
  h(`circle`, {
    attrs
  });
