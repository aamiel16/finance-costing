import {Theme} from "@material-ui/core/styles";

export const Metrics = {
  drawerWidth: 240,
  maxHeight: (theme: Theme) => (n = 2) => `calc(100vh - (${theme.mixins.toolbar.minHeight}px * (${n} + 0.1)))`
}
