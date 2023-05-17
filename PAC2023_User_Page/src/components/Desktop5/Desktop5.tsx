import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AccountCircleIcon } from './AccountCircleIcon';
import { CircleNotificationsIcon } from './CircleNotificationsIcon';
import classes from './Desktop5.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 17:277 */
export const Desktop5: FC<Props> = memo(function Desktop5(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle32}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.emAlta}>Em alta</div>
      <div className={classes.recomendados}>Recomendados</div>
      <div className={classes.favoritos}>Favoritos</div>
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
      <div className={classes.maleUser}></div>
      <div className={classes.usuario}>Usuário</div>
      <div className={classes.minhasInformacoes}>Minhas informações</div>
      <div className={classes.configuracoes}>Configurações</div>
      <div className={classes.meusLivros}>Meus livros</div>
      <div className={classes.line3}></div>
      <div className={classes.notificacoes}>Notificações</div>
      <div className={classes.circleNotifications}>
        <CircleNotificationsIcon className={classes.icon4} />
      </div>
    </div>
  );
});
