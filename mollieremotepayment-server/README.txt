Mollie Remote Payment Server
============================

Version 2.2.0

Purpose
-------
Central WordPress payment server for multiple client websites using Mollie.

Credentials (this install)
--------------------------
1. credentials.php holds Mollie API key, currency, and Shared Secret.
2. Upload this whole folder to: wp-content/plugins/mollieremotepayment-server/
3. Activate the plugin in WP Admin.
4. Values are applied automatically from credentials.php.
5. Confirm under: WP Admin > Mollie Remote Payment

Client plugin is configured separately (same Shared Secret + this site URL).

Supported client modes
----------------------
1. Legacy hosted-checkout clients using the existing signed payload.
2. v2.5 Components clients using integration_mode=components_v1 and a signed card_token hash.
3. Hosted-checkout clients that optionally send a signed merchant_order_number.

Merchant order number
---------------------
When merchant_order_number is present, it must contain only 1-12 digits and cannot start with zero.
It is included in the HMAC payload and is used only for the human-facing Mollie description.

Security
--------
- Shared Secret must match the client plugin.
- Do not commit credentials.php to git.
- Mollie payment status is re-fetched from Mollie for return and webhook handling.

Settings
--------
WP Admin > Mollie Remote Payment

Webhook
-------
The plugin automatically sends its own Mollie webhook URL with each payment (?mrp=1).
No manual Mollie dashboard webhook is required for this plugin.
