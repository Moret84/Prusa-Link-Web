// This file is part of the Prusa Link Web
// Copyright (C) 2021 Prusa Research a.s. - www.prusa3d.com
// SPDX-License-Identifier: GPL-3.0-or-later

/**
 * Show the stream advertised by the printer, served by another process.
 * @param {object} context
 */
const update = (context) => {
  const container = document.getElementById("camera-stream");
  const picture = document.getElementById("camera-stream-picture");
  if (!container || !picture) {
    return;
  }

  const streamUrl = context.camera?.streamUrl;
  container.hidden = !streamUrl;
  if (!streamUrl) {
    picture.removeAttribute("src");
    return;
  }
  if (picture.getAttribute("src") !== streamUrl) {
    picture.onerror = () => picture.removeAttribute("src");
    picture.setAttribute("src", streamUrl);
  }
};

export default { update };
