// HYRUP Supabase browser configuration.
// The publishable key is designed for browser use; database access is controlled by RLS.
window.HYRUP_CONFIG = {
  supabaseUrl: "https://shssuksqkghqueapuaut.supabase.co",
  supabasePublishableKey: "sb_publishable_GJiUAPBX_JmpAHqsC7oBFQ_50tIiXUG"
};
(function () {
  const c = window.HYRUP_CONFIG;
  const validUrl = c && /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(c.supabaseUrl);
  const validKey = c && typeof c.supabasePublishableKey === "string" &&
    (c.supabasePublishableKey.startsWith("sb_publishable_") || c.supabasePublishableKey.length > 100);
  if (!window.supabase || !validUrl || !validKey) {
    window.hyrupSupabase = null;
    console.warn("HYRUP Supabase is not connected: check the Supabase JS CDN and project key.");
    return;
  }
  window.hyrupSupabase = window.supabase.createClient(c.supabaseUrl, c.supabasePublishableKey);
})();
