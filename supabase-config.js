// HYRUP Supabase browser configuration.
// Project URL inferred from the project reference in your Supabase dashboard URL.
// Add the Publishable key from Supabase > Project Settings > API Keys.
// Never put a service_role/secret key in browser code.
window.HYRUP_CONFIG = {
  supabaseUrl: "https://shssuksqkghqueapuaut.supabase.co",
  supabasePublishableKey: ""
};
(function () {
  const c = window.HYRUP_CONFIG;
  const validUrl = c && /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(c.supabaseUrl);
  const validKey = c && typeof c.supabasePublishableKey === "string" &&
    (c.supabasePublishableKey.startsWith("sb_publishable_") || c.supabasePublishableKey.length > 100);
  if (!window.supabase || !validUrl || !validKey) {
    window.hyrupSupabase = null;
    console.warn("HYRUP Supabase is not connected: add the correct Publishable key in supabase-config.js.");
    return;
  }
  window.hyrupSupabase = window.supabase.createClient(c.supabaseUrl, c.supabasePublishableKey);
})();
