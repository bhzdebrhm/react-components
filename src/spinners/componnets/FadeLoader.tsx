/** @jsxImportSource @emotion/react */
import * as React from "react";
import { keyframes, css, SerializedStyles } from "@emotion/react";

import { heightWidthRadiusDefaults, cssValue, parseLengthAndUnit } from "../utils";
import { LoaderHeightWidthRadiusProps } from "../interfaces";

const fade = keyframes`
  50% {opacity: 0.3}
  100% {opacity: 1}
`;

class Loader extends React.PureComponent<Required<LoaderHeightWidthRadiusProps>> {
    public static defaultProps = heightWidthRadiusDefaults(15, 5, 2);

    public radius = (): number => {
        const { margin } = this.props;
        const { value } = parseLengthAndUnit(margin);

        return value + 18;
    };

    public quarter = (): number => {
        return this.radius() / 2 + this.radius() / 5.5;
    };

    public style = (i: number): SerializedStyles => {
        const { height, width, margin, color, radius, speedMultiplier } = this.props;

        return css`
      position: absolute;
      width: ${cssValue(width)};
      height: ${cssValue(height)};
      margin: ${cssValue(margin)};
      background-color: ${color};
      border-radius: ${cssValue(radius)};
      transition: 2s;
      animation-fill-mode: "both";
      animation: ${fade} ${1.2 / speedMultiplier}s ${i * 0.12}s infinite ease-in-out;
    `;
    };

    public wrapper = (): SerializedStyles => {
        return css`
      position: absolute;
      font-size: 0;
      top: 50%;
      left: 50%;
      width: ${this.radius() * 3}px;
      height: ${this.radius() * 3}px;
    `;
    };

    public a = (): SerializedStyles => css`
    ${this.style(1)};
    top: ${this.radius()}px;
    left: 0;
  `;
    public b = (): SerializedStyles => css`
    ${this.style(2)};
    top: ${this.quarter()}px;
    left: ${this.quarter()}px;
    transform: rotate(-45deg);
  `;
    public c = (): SerializedStyles => css`
    ${this.style(3)};
    top: 0;
    left: ${this.radius()}px;
    transform: rotate(90deg);
  `;
    public d = (): SerializedStyles => css`
    ${this.style(4)};
    top: ${-this.quarter()}px;
    left: ${this.quarter()}px;
    transform: rotate(45deg);
  `;
    public e = (): SerializedStyles => css`
    ${this.style(5)};
    top: ${-this.radius()}px;
    left: 0;
  `;
    public f = (): SerializedStyles => css`
    ${this.style(6)};
    top: ${-this.quarter()}px;
    left: ${-this.quarter()}px;
    transform: rotate(-45deg);
  `;
    public g = (): SerializedStyles => css`
    ${this.style(7)};
    top: 0;
    left: ${-this.radius()}px;
    transform: rotate(90deg);
  `;
    public h = (): SerializedStyles => css`
    ${this.style(8)};
    top: ${this.quarter()}px;
    left: ${-this.quarter()}px;
    transform: rotate(45deg);
  `;

    public render(): any {
        const { loading, css } = this.props;

        return loading ? (
          // @ts-ignore
            <span css={[this.wrapper(), css]}>
                {/* @ts-ignore */}
                <span css={this.a()} />
                  {/* @ts-ignore */}
                <span css={this.b()} />
                  {/* @ts-ignore */}
                <span css={this.c()} />
                  {/* @ts-ignore */}
                <span css={this.d()} />
                  {/* @ts-ignore */}
                <span css={this.e()} />
                  {/* @ts-ignore */}
                <span css={this.f()} />
                  {/* @ts-ignore */}
                <span css={this.g()} />
                  {/* @ts-ignore */}
                <span css={this.h()} />
            </span>
        ) : null;
    }
}

export default Loader;