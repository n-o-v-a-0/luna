document.addEventListener("keydown", (event) => {
  if (event.key === "F4") {
    if (!document.getElementById("luna-client-mod-popup")) {
      openPopup();
    }
  }
});

function openPopup() {
  const popup = document.createElement("div");
  popup.id = "luna-client-mod-popup";
  popup.style.position = "fixed";
  popup.style.top = "20%";
  popup.style.left = "20%";
  popup.style.transform = "translate(-20%, -20%)";
  popup.style.backgroundColor = "var(--background-primary)";
  popup.style.color = "var(--text-normal)";
  popup.style.zIndex = 999999;
  popup.style.padding = "20px";
  popup.style.borderRadius = "5px";
  popup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  popup.innerHTML = `
<button style="float: right;" id="ifuckedyourmomlastnight" class="button-ejjZWC lookFilled-1H2Jvj colorBrand-2M3O3N sizeSmall-3R2P2p grow-2T4nbg">𝕏</button>
<img src="https://raw.githubusercontent.com/n-o-v-a-0/lunacdn/main/luna.png" style="float: left; max-width: 50px; border-radius: 50%;">
<p class="display-lg__20b93">Luna</p>
<p>no plugins yet</p>
<label for="themeSelect">Choose a theme:</label>
    <select id="themeSelect" class="select-Zz0IcO lookFilled-GPyucw">
        <option value="0" class="option-Uc12mm">None</option>
        <option value="1" class="option-Uc12mm">Amoled</option>
        <option value="2" class="option-Uc12mm">Opera GX</option>
        <option value="3" class="option-Uc12mm">Fluent</option>
        <option value="4" class="option-Uc12mm">Windows XP</option>
        <option value="5" class="option-Uc12mm">Purple Sky</option>
        <option value="6" class="option-Uc12mm">Midnight</option>
        <option value="7" class="option-Uc12mm">Float</option>
    </select>
    `;
  document.body.appendChild(popup);

  document
    .getElementById("ifuckedyourmomlastnight")
    .addEventListener("click", () => {
      document.getElementById("luna-client-mod-popup").remove();
    });

  const themeSelect = document.getElementById("themeSelect");

  const storedThemeIndex = localStorage.getItem("selectedThemeIndex");
  if (storedThemeIndex) {
    themeSelect.value = storedThemeIndex;
    loadTheme();
  }
  themeSelect.addEventListener("change", function () {
    const selectedThemeIndex = themeSelect.value;
    localStorage.setItem("selectedThemeIndex", selectedThemeIndex);
    loadTheme();
    document.getElementById("themechangepopup").style.display = "block";
    const dwqdiqowd = document.querySelectorAll('[class="container-1eFtFS"]');
    document.getElementById("luna-client-mod-popup").remove();
    dwqdiqowd.forEach((element) => {
      element.remove();
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  });

  loadTheme();
}

const storedThemeIndex = localStorage.getItem("selectedThemeIndex");

function loadTheme() {
  theme = document.createElement("style");
  theme.innerHTML = `@import url('https://raw.githubusercontent.com/n-o-v-a-0/lunacdn/main/themes/${storedThemeIndex}.css');`;
  theme.id = "luna-themesloader"
  document.head.append(theme);
}

loadTheme();

function themeFunc() {
  const themechangepopup = document.createElement("div");

  themechangepopup.id = "themechangepopup";
  themechangepopup.style.position = "fixed";
  themechangepopup.style.top = "50%";
  themechangepopup.style.left = "50%";
  themechangepopup.style.transform = "translate(-50%, -50%)";
  themechangepopup.style.backgroundColor = "var(--background-primary)";
  themechangepopup.style.color = "var(--text-normal)";
  themechangepopup.style.zIndex = 9999999;
  themechangepopup.style.padding = "20px";
  themechangepopup.style.borderRadius = "5px";
  themechangepopup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  themechangepopup.style.display = "none";
  themechangepopup.innerHTML = `
  <h1 class="display-lg-3SN7Sz">Theme applied</h1>
  <p>Refreshing...</p>
  `;
  document.body.append(themechangepopup);
}

themeFunc();

setTimeout(() => {
  const elements = document.querySelectorAll('[aria-label="Send a gift"]');

  elements.forEach((element) => {
    element.style.visibility = "hidden";
  });
}, 10000);

let experiments = false;

if (experiments) {
  script = document.createElement('script');
  script.src = ""
  document.body.append(script)
}
