import { createGlobalStyle } from "styled-components";

import {
  grass,
  normal,
  fire,
  fighting,
  water,
  poison,
  flying,
  electric,
  ground,
  psychic,
  rock,
  ice,
  bug,
  dragon,
  dark,
  ghost,
  steal,
  fairy,
} from "./colors";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    body {
      background: #fff;
    }

    .title {
        text-align: center;
        margin: 10px;
        margin-top: 50px;
        font-family: Roboto, sans-serif;
    }

    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

.grass {
    background: ${grass};
}
.normal {
    background-color: ${normal};
}
.fire {
    background-color: ${fire};
}
.fighting {
    background-color: ${fighting};
}
.water {
    background-color: ${water};
}
.poison {
    background-color: ${poison};
}
.flying {
    background-color: ${flying};
}
  .electric {
    background-color: ${electric};
  }
  .ground {
    background-color: ${ground};
  }
  .psychic {
    background-color: ${psychic};
  }
  .rock {
    background-color: ${rock};
  }
  .ice {
    background-color: ${ice};
  }
  .bug {
    background-color: ${bug};
  }
  .dragon {
    background-color: ${dragon};
  }
  .ghost {
    background-color: ${ghost};
  }
  .dark {
    background-color: ${dark};
  }
  .steel {
    background-color: ${steal};
  }
  .fairy {
    background-color: ${fairy};
  }

`;
