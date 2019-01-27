/**
 * HTML & CSS custom web component template
 * SideBar template
 * v0.0.1 Jan 2019
 */
const sideBarHtml = `
  <style>
    :host{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem var(--size-lg, 2rem);
      min-height: var(--header-height-md, 3rem);
      background-color: var(--color-primary,#000);
      background-opacity: 0.7;
      color: var(--color-primary-contrast,#fff);
      box-shadow: var(--box-shadow-1);
    }
    ::slotted(.app-logo){
      height: var(--size-lg, 2rem);
    }
    ::slotted(.app-title){
      font-size: var(--size-md, 2rem);
    }

    @media screen and (max-width: 480px){
      :host{
        display: block;
        font-size: 75%;
      }
      ::slotted(.app-logo){
        margin-bottom: var(--size-sm, 1rem);
      }
    }
  </style>
  <slot>This is default content</slot>  
`

export default sideBarHtml
