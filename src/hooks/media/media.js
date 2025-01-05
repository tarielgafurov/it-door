import { css } from "styled-components"
const sizes = {
    mobile: "375px"
}

export const media = {
    mobile: (styles) => css`
    @media (max-width: ${sizes.mobile}) {
        ${styles}
    }
    `
}