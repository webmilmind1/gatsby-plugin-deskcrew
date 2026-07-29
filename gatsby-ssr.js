/**
 * gatsby-plugin-deskcrew
 *
 * Appends the DeskCrew widget script to every rendered page. Options come from
 * gatsby-config.js; components and templates stay untouched.
 */
const React = require("react");

const KEY_RE = /^pub_[A-Za-z0-9_-]{4,64}$/;
const SLUG_RE = /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/;
const HEX_RE = /^#[0-9a-fA-F]{3,8}$/;

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions = {}) => {
  const key = String(pluginOptions.key || "").trim();
  if (!KEY_RE.test(key)) {
    console.warn(
      "[gatsby-plugin-deskcrew] options.key is required (your widget key, pub_...); widget not injected."
    );
    return;
  }

  const props = {
    key: "deskcrew-widget",
    src: "https://deskcrew.io/desk.js",
    defer: true,
    "data-key": key,
  };

  const board = String(pluginOptions.board || "").trim();
  if (board && SLUG_RE.test(board)) props["data-board"] = board;

  if (pluginOptions.position === "left") props["data-position"] = "left";

  const color = String(pluginOptions.color || "").trim();
  if (color && HEX_RE.test(color)) props["data-color"] = color;

  const greeting = String(pluginOptions.greeting || "").trim();
  if (greeting) props["data-greeting"] = greeting.slice(0, 200);

  setPostBodyComponents([React.createElement("script", props)]);
};
