import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Fonts from "assets/css/fonts.css";

const GlobalStyles = createGlobalStyle`
    ${reset};
    ${Fonts};

    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: #e9ecf1;
        color: #2b2b2b;
        font-family: "Noto Sans KR", Roboto, sans-serif;

        .main {
            background-color: transparent;
        }
        #root {
            padding-top: 62px;
            min-width: 1400px;
            margin: 0 auto;
        }
    }

    .clearfix:after {
        content: "";
        display: block;
        clear: both;
    }

    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        font-family: inherit;
    }

    /* custom Checkbox */
    .custom-checkbox {
        label {
            position: relative;
            padding-left: 28px;
            line-height: 20px;
            cursor: pointer;
            line-height: 1;
            color: #666;
            font-size: 13px;
            display: table-cell;
            height: 20px;
            vertical-align: middle;

            &:before {
                content: "";
                display: inline-block;
                width: 20px;
                height: 20px;
                margin: 0;
                padding: 0;
                background: #fff;
                border: 1px solid #cccdd5;
                border-radius: 2px;
                position: absolute;
                left: 0;
                top: 0;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
        }
        input[type=checkbox] {
            display: none;
            &:checked + label:before {
                background: #fff url('/assets/img/common/icon-checkbox-checked.png') no-repeat 50%;
            }
            &:disabled + label {
                opacity: 0.6;
            }
        }
    }


    /* custom Radio */
    .custom-radio {
        label {
            position: relative;
            padding-left: 28px;
            line-height: 20px;
            cursor: pointer;
            line-height: 1;
            color: #666;
            font-size: 13px;
            display: table-cell;
            height: 20px;
            vertical-align: middle;

            &:before {
                content: "";
                display: inline-block;
                width: 20px;
                height: 20px;
                margin: 0;
                padding: 0;
                background: #fff;
                border-radius: 2px;
                position: absolute;
                left: 0;
                top: 0;
                background: url('/assets/img/common/icon-radio-circle.svg') 0px 0px no-repeat;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
        }
        input[type=radio] {
            display: none;
            &:checked + label:before {
                background: url('/assets/img/common/icon-radio-circle-checked.svg') 0px 0px no-repeat;
            }
            &:disabled + label {
                opacity: 0.6;
            }
        }
    }

    button, a {
        &:focus {
            position: relative;
            z-index: 1;
        }
    }
`;

export default GlobalStyles;
