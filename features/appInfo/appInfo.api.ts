import AppSetting from "../../modules/share/model/appSetting";
import WebSeo from "../../modules/share/model/webSeo";
import { get, getEndpoint } from "../../utils/fetcher";

export const apiGetAppSettingDetails = async (appName: string, local = true): Promise<AppSetting> => {
  const { data, error } = await get({ endpoint: getEndpoint("/api/app-setting-info", local), params: { appName } });
  return error ? null : data;
}

export const apiGetSEOInfo = async (appId: string, slug?: string, local = true): Promise<WebSeo> => {
  const { data, error } = await get({ endpoint: getEndpoint("/api/web-app-seo-info", local), params: { appId, slug } });
  return error ? null : data;
}