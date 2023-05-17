import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AccountCircleIcon } from './AccountCircleIcon';
import classes from './Desktop3.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 7:33 */
export const Desktop3: FC<Props> = memo(function Desktop3(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.emAlta}>Em alta</div>
      <div className={classes.recomendados}>Recomendados</div>
      <div className={classes.meusLivros}>Meus livros</div>
      <div className={classes.bibliotecaInteligente}>Biblioteca Inteligente</div>
      <div className={classes.icon}></div>
      <div className={classes.inicio}>Início</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
      <div className={classes.accountCircle}>
        <AccountCircleIcon className={classes.icon3} />
      </div>
      <div className={classes.minhaLista}>Minha lista</div>
      <div className={classes.livrosDeFantasia}>Livros de fantasia</div>
      <div className={classes.livrosDeRomance}>Livros de romance</div>
      <div className={classes.desktop4}>
        <div className={classes.rectangle16}></div>
        <div className={classes.rectangle23}></div>
        <div className={classes.rectangle22}></div>
        <div className={classes.rectangle21}></div>
        <div className={classes.rectangle20}></div>
        <div className={classes.rectangle19}></div>
        <div className={classes.rectangle18}></div>
        <div className={classes.rectangle17}></div>
        <div className={classes.rectangle24}></div>
        <div className={classes.rectangle25}></div>
        <div className={classes.rectangle26}></div>
        <div className={classes.rectangle27}></div>
        <div className={classes.rectangle28}></div>
        <div className={classes.rectangle29}></div>
        <div className={classes.rectangle30}></div>
        <div className={classes.rectangle31}></div>
      </div>
      <div className={classes.desktop5}>
        <div className={classes.rectangle162}></div>
        <div className={classes.rectangle232}></div>
        <div className={classes.rectangle222}></div>
        <div className={classes.rectangle212}></div>
        <div className={classes.rectangle202}></div>
        <div className={classes.rectangle192}></div>
        <div className={classes.rectangle182}></div>
        <div className={classes.rectangle172}></div>
        <div className={classes.rectangle242}></div>
        <div className={classes.rectangle252}></div>
        <div className={classes.rectangle262}></div>
        <div className={classes.rectangle272}></div>
        <div className={classes.rectangle282}></div>
        <div className={classes.rectangle292}></div>
        <div className={classes.rectangle302}></div>
        <div className={classes.rectangle312}></div>
      </div>
      <div className={classes.desktop6}>
        <div className={classes.rectangle163}></div>
        <div className={classes.rectangle233}></div>
        <div className={classes.rectangle223}></div>
        <div className={classes.rectangle213}></div>
        <div className={classes.rectangle203}></div>
        <div className={classes.rectangle193}></div>
        <div className={classes.rectangle183}></div>
        <div className={classes.rectangle173}></div>
        <div className={classes.rectangle243}></div>
        <div className={classes.rectangle253}></div>
        <div className={classes.rectangle263}></div>
        <div className={classes.rectangle273}></div>
        <div className={classes.rectangle283}></div>
        <div className={classes.rectangle293}></div>
        <div className={classes.rectangle303}></div>
        <div className={classes.rectangle313}></div>
      </div>
    </div>
  );
});
