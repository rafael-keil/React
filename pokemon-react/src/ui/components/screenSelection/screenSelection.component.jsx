import { Switch, Route, Redirect } from "react-router";
import {
  StartPokemon,
  Pokedex,
  BattleSelection,
  Menu,
  Battle,
  EndBattle,
} from "../../screens";
import { Pokecenter } from "../../screens/pokecenter/pokecenter.screen";
import { PATH } from "../../../constants";

export function ScreenSelection() {
  return (
    <Switch>
      <Route path={PATH.START} exact>
        <StartPokemon />;
      </Route>
      <Route path={PATH.MENU} exact>
        <Menu />;
      </Route>
      <Route path={PATH.POKEDEX} exact>
        <Pokedex />
      </Route>
      <Route path={PATH.BATTLESELECTION} exact>
        <BattleSelection />
      </Route>
      <Route path={PATH.BATTLE} exact>
        <Battle />
      </Route>
      <Route path={PATH.POKECENTER} exact>
        <Pokecenter />
      </Route>
      <Route path={PATH.WIN} exact>
        <EndBattle text="Voce venceu!" />
      </Route>
      <Route path={PATH.LOSE} exact>
        <EndBattle text="Voce perdeu!" />
      </Route>
      <Route path={PATH.CAPTURE} exact>
        <EndBattle text="Voce capturou!" />
      </Route>
      <Route path="/">
        <Redirect to="/menu" />
      </Route>
    </Switch>
  );
}
