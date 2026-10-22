// HYRUP Supabase browser configuration.
// Paste your Supabase Project URL and publishable (anon) key below.
// Never put a service_role/secret key in browser code.
window.HYRUP_CONFIG = {
  supabaseUrl: "",
  supabasePublishableKey: ""
};
(function () {
  const c = window.HYRUP_CONFIG;
  if (!c || !c.supabaseUrl || !c.supabasePublishableKey ||
      !/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(c.supabaseUrl) ||
      c.supabasePublishableKey.length < 20) {
    window.hyrupSupabase = null;
    return;
  }
  window.hyrupSupabase = window.supabase.createClient(c.supabaseUrl, c.supabasePublishableKey);
})();
