/**
 * Talk to Speech — Host marker for a client-only bundle.
 *
 * All behavior lives in the browser half (`./client`), which registers into the
 * composer's activity slot and drives the `speech` Remote. This Host entry
 * exists so the Loader has a row to mount the client half onto; it owns no Host
 * services and therefore has nothing to set up or dispose.
 */
function apply() {}

export { apply };
