api.mapkey("<ctrl-y>", "Show me the money", function () {
  Front.showPopup(
    "a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).",
  );
});

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
api.map("gt", "T");
api.map("ss", "on");
api.map("aa", "S");
api.map("h", "E");
api.map("l", "R");
api.map("as", ";fs");
api.map("u", "<Ctrl-i>");
api.map("Ctrl+d", "<Ctrl-f>");
api.map("<Ctrl-i>", "<Alt-s>"); // hotkey must be one keystroke with/without modifier, it can not be a sequence of keystrokes like `gg`.
// an example to remove mapkey `Ctrl-i`
api.unmap("<ctrl-i>");
api.map(",", "<Ctrl-6>");
// Add your custom mapping here






// Map Space + f to open Facebook in normal mode
api.mapkey(
  "sf",
  "Open Facebook",
  function () {
    window.open("https://www.facebook.com", "_blank");
  },
  {
    domain: /./, // Apply this mapping to all domains
  },
);
// Map Space + p to open ChatGPT and manually paste selected text into input

api.mapkey("sq", "Open Quran", function () {
  window.open("https://quran.com", "_blank");
});

api.mapkey("s1", "fbLevel1", function () {
  window.open("https://www.facebook.com/groups/programmingHero", "_blank");
});


api.mapkey("s2", "fbLevel2", function () {
  window.open("https://www.facebook.com/groups/phapollo4", "_blank");
});

api.mapkey("sb", "Open blank page", function () {
  window.open("https://blank.page/", "_blank");
});

// pre requisite 
api.mapkey("sp", "pre requisite level2", function () {
  window.open("https://web.programming-hero.com/next-level-prerequisites-batch4/video/next-level-prerequisites-batch4-37-2-template-string-arrow-function-spread-operator", "_blank");
});

// github repository page opening 

api.mapkey('gr', 'Repository Github', function() {
  window.open("https://github.com/mdshahjalal5?tab=repositories", "_blank");
});

// new repo for github 

api.mapkey("gn", "new repo github", function () {
  window.open("https://github.com/new", "_blank");
});


// redux 

api.mapkey("sr", "redux", function () {
  window.open("https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-21-1-project-initialization-and-redux-store-setup-recap", "_blank");
});

api.mapkey("sc", "Open chatgpt", function () {
  window.open("https://chatgpt.com/", "_blank");
});
api.mapkey("sj", "Open Wedding Nasheed", function () {
  window.open("https://www.youtube.com/watch?v=dWBgNHT4ipE&ab_channel=HuzaifahNasheeds", "_blank");
});


api.mapkey("ap", "Search clipboard content in new tab", function () {
  Clipboard.read(function (response) {
    if (response.data) {
      let searchUrl =
        "https://www.google.com/search?q=" + encodeURIComponent(response.data);
      tabOpenLink(searchUrl);
    } else {
      Front.showPopup("No content found in clipboard.");
    }
  });
});

api.mapkey("ap", "Search clipboard content in new tab", function () {
  // Use SurfingKeys' Clipboard API to read the latest clipboard content
  Clipboard.read(function (response) {
    if (response) {
      let searchUrl =
        "https://www.google.com/search?q=" + encodeURIComponent(response);
      // Open the generated URL in a new tab
      tabOpenLink(searchUrl);
    } else {
      // Display an error if there's no content in the clipboard
      Front.showPopup("Clipboard is empty.");
    }
  });
});

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
