const lunaThemeURL = localStorage.getItem("lunaThemeURL");

document.addEventListener("keydown", (event) => {
  if (event.key === "F4") {
    if (!document.getElementById("lunaPopup")) {
      openPopup();
    }
  }
});

function openPopup() {
  const popup = document.createElement("div");
  popup.id = "lunaPopup";
  popup.innerHTML = `
  <div class="closeButton__34341" aria-label="Close" id="lunaClose"role="button" tabindex="0" style="float: right;"><svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div>
<label for="lunaText"><img src="https://raw.githubusercontent.com/n-o-v-a-0/lunacdn/main/luna.png" style="float: left; max-width: 50px;"></label>
<p class="display-lg__20b93" id="lunaText">Luna</p><br>
<label for="themeSelect">Enter a theme URL:</label>
<input class="inputDefault__80165 input_d266e7" placeholder="Your theme link" type="text" id="themeSelect">
<button type="submit" class="button_afdfd9 lookFilled__19298 colorBrand_b2253e sizeSmall__71a98 grow__4c8a4" id="saveTheme"><div class="contents_fb6220">Save & Reload</div></button><br>
<div class="banner__79cec tier2__611e8 canceled__4a0b5"><div class="detailsContainer_d19ecf"><div class="details__695f1"><div class="planInfo_cd8cba">Luna will only work if you <a href="https://chromewebstore.google.com/detail/always-disable-content-se/ffelghdomoehpceihalcnbmnodohkibj" target="_blank">have this chrome extension.</a> If you already have it installed and enabled, you can safely ignore this.</div></div></div></div>
    `;
  document.body.appendChild(popup);

  document.getElementById("lunaClose").addEventListener("click", () => {
    document.getElementById("lunaPopup").remove();
  });

  const themeSelect = document.getElementById("themeSelect");

  if (lunaThemeURL) {
    themeSelect.value = lunaThemeURL;
  }

  function saveTheme() {
    var themeUrl = document.getElementById('themeSelect').value;
    localStorage.setItem('lunaThemeURL', themeUrl);
    location.reload();
  }

  document.getElementById('saveTheme').addEventListener('click', saveTheme);

  loadTheme();
}

function loadTheme() {
  theme = document.createElement("style");
  theme.innerHTML = `@import '${lunaThemeURL}';`;
  theme.id = "luna-themesloader";
  document.head.append(theme);
}

loadTheme();
