import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CheckBoxOutlineBlankIcon } from './CheckBoxOutlineBlankIcon';
import classes from './Desktop1.module.css';
import { Icon1Icon } from './Icon1Icon';
import { LockOpenIcon } from './LockOpenIcon';
import { PersonOutlineIcon } from './PersonOutlineIcon';
import { UserIcon } from './UserIcon';
import { UserIcon2 } from './UserIcon2';

interface Props {
  className?: string;
}
/* @figmaId 6:11 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.fundoPapel}></div>
      <div className={classes.fundoAzul}></div>
      <div className={classes.createBottom}></div>
      <div className={classes.criarUmaConta}>Criar uma conta</div>
      <div className={classes.createBottom2}></div>
      <div className={classes.entrar}>Entrar</div>
      <div className={classes.line2}></div>
      <div className={classes.login}>Login</div>
      <div className={classes.user}>
        <UserIcon className={classes.icon} />
      </div>
      <div className={classes.senha}>Senha</div>
      <div className={classes.livros}></div>
      <div className={classes.line1}></div>
      <div className={classes.ou}>ou</div>
      <div className={classes.bibliotecaInteligente}>Biblioteca Inteligente</div>
      <div className={classes.icon1}>
        <Icon1Icon className={classes.icon2} />
      </div>
      <div className={classes.checkBoxOutlineBlank}>
        <CheckBoxOutlineBlankIcon className={classes.icon3} />
      </div>
      <div className={classes.esqueciMinhaSenha}>Esqueci minha senha</div>
      <div className={classes.lockOpen}>
        <LockOpenIcon className={classes.icon4} />
      </div>
      <div className={classes.user2}>
        <UserIcon2 className={classes.icon5} />
      </div>
      <div className={classes.usuario}>Usuário</div>
      <div className={classes.personOutline}>
        <PersonOutlineIcon className={classes.icon6} />
      </div>
    </div>
  );
});
