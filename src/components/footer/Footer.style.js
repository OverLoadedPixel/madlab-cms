import styled from "styled-components";

export const FooterContainer = styled.footer`

.footer {
    padding-top: 60px;
    width: 100%;
    position: relative;
    height: auto;
    background-color: #070617;
    display: flex;
    align-content: stretch;
    justify-items: center;
}
.footer .col {
    width: 190px;
    height: auto;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

}
.footer .col h1 {
    margin: 0;

    font-family: inherit;
    font-size: 12px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgba(255,255,255,0.2);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.250em;
}
.footer .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.footer .col ul li {
    color: #999999;
    font-size: 14px;
    font-family: inherit;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
}
.social ul li {
    display: inline-block;
    padding-right: 5px !important;
}

.footer .col ul li:hover {
    color: #ffffff;
    transition: .1s;
    -webkit-transition: .1s;
    -moz-transition: .1s;
}
.clearfix {
    clear: both;
}
@media only screen and (min-width: 1280px) {
    .contain {
        min-width: 800px;
        margin: 0 auto;
    }
}
@media only screen and (max-width: 1139px) {
    .contain .social {
        width: 1000px;
        display: block;
    }
    .social h1 {
        margin: 0px;
    }
}
@media only screen and (max-width: 950px) {
    .footer .col {
        width: 33%;
    }
    .footer .col h1 {
        font-size: 14px;
    }
    .footer .col ul li {
        font-size: 13px;
    }
}
@media only screen and (max-width: 500px) {
    .footer .col {
        width: 50%;
    }
    .footer .col h1 {
        font-size: 14px;
    }
    .footer .col ul li {
        font-size: 13px;
    }
}
@media only screen and (max-width: 340px) {
    .footer .col {
        width: 100%;
    }
}

`;
