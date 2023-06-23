import {countriesItems} from "./countriesBaseSettings"
import { refs } from "./refs";

export const murkup = countriesItems.map(({srcPath, alt, dataPath, countryName, countryCode}) => 
    `<div role="menuitem" tabindex="0" class="MenuItem compact">
    <span class="country-flag"
      ><img
        src="${srcPath}"
        class="emoji"
        alt="${alt}"
        data-path="${dataPath}" /></span
    ><span class="country-name">${countryName}</span
    ><span class="country-code">${countryCode}</span>
  </div>`
).join("")


