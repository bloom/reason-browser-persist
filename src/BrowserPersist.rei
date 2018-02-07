let setItemRaw: (~key: string, Js.Json.t) => Js.Promise.t(unit);

let setItem: (~encoder: 'a => Js.Json.t, ~key: string, 'a) => Js.Promise.t(unit);

let getItemRaw: string => Js.Promise.t(Js.Json.t);

let getItem: (~decoder: Json.Decode.decoder('a), string) => Js.Promise.t(Js.Result.t('a, string));