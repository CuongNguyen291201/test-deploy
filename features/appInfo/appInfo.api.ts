import AppSetting from "../../modules/share/model/appSetting";
import { get, getEndpoint } from "../../utils/fetcher"

export const apiGetAppSettingDetails = async (appName: string, local = true): Promise<AppSetting> => {
  const { data, error } = await get({ endpoint: getEndpoint("/api/app-setting-info", local), params: { appName } });
  return error ? null : data;
}