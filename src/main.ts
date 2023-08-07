import { yukukuru } from './yukukuru.ts';
import { Nostr, Relay } from 'https://deno.land/x/nostr_deno_client/mod.ts';

const relayList = {
    // "lol" : "wss://nos.lol",
    "Damus"   : "wss://relay.damus.io",
    "Nokotaro": "wss://nostr-relay.nokotaro.com",
    "Relay-jp": "wss://relay-jp.nostr.wirednet.jp",
    "Relay.jp": "wss://relay.nostr.wirednet.jp"
};

const privateKey = Deno.env.get("PRIVATE_KEY");
const nostr      = new Nostr();
nostr.privateKey = privateKey;

for(const key in relayList) {
  const value = relayList[key];
  nostr.relayList.push({
    name: key,
    url : value
  });
}

nostr.on('relayConnected', (relay: Relay) => console.log('Relay connected.', relay.name));
nostr.on('relayError', (err: Error) => console.log('Relay error;', err));
nostr.on('relayNotice', (notice: string[]) => console.log('Notice', notice));

nostr.debugMode = true;
await nostr.connect();
await nostr.sendTextPost(yukukuru(true));
await nostr.disconnect();

Deno.exit(0);