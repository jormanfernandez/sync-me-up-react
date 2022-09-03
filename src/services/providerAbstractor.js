import { providerAbstractor as dynamicProviderAbstractor } from "services/dynamic/providerAbstractor";
import { providerAbstractor as staticProviderAbstractor } from "services/static/providerAbstractor";
import { CONFIG } from "appConfig";

const { isStatic } = CONFIG;

export const providerAbstractor = isStatic ? staticProviderAbstractor : dynamicProviderAbstractor;