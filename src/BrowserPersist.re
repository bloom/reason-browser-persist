type promise('a) = Js.Promise.t('a);

type json = Js.Json.t;

[@bs.module "./vendor/localforage.js"] external setItem_ : (string, 'a) => promise(unit) =
  "setItem";

let setItemRaw = (~key, value) => setItem_(key, value);

let setItem = (~encoder, ~key, value) => value |> encoder |> setItem_(key);

[@bs.module "./vendor/localforage.js"] external getItem_ : string => promise(json) = "getItem";

let getItemRaw = (key) => getItem_(key);

let getItem = (~decoder, key) =>
  getItemRaw(key)
  |> Js.Promise.then_(
       (json) =>
         switch (json |> decoder) {
         | decoded => Js.(Promise.resolve(Result.Ok(decoded)))
         | exception (Json.Decode.DecodeError(msg)) => Js.(Promise.resolve(Result.Error(msg)))
         }
     );