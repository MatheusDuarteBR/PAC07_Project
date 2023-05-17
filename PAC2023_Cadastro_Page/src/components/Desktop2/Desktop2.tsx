import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop2.module.css';
import { Icon1Icon } from './Icon1Icon';
import { PasswordIcon } from './PasswordIcon';
import { UserIcon } from './UserIcon';

interface Props {
  className?: string;
}
/* @figmaId 7:4 */
export const Desktop2: FC<Props> = memo(function Desktop2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.fundoPapel}></div>
      <div className={classes.fundoAzul}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.confirmarSenha}>Confirmar senha</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.senha}>Senha</div>
      <div className={classes.cadastro}>Cadastro</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.usuario}>Usuário</div>
      <div className={classes.livros}></div>
      <div className={classes.password}>
        <PasswordIcon className={classes.icon} />
      </div>
      <div className={classes.confirmar}>Confirmar</div>
      <div className={classes.icon1}>
        <Icon1Icon className={classes.icon2} />
      </div>
      <div className={classes.bibliotecaInteligente}>Biblioteca Inteligente</div>
      <div className={classes.user}>
        <UserIcon className={classes.icon3} />
      </div>
      <div className={classes.eMail}>E-mail</div>
    </div>
  );
});
