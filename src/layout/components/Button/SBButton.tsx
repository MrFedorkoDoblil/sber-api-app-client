import { UISize } from '../../types/uiTypes';
import { Button } from 'antd';
import SVGLoading from '../SVG/loading';
import { SVGSberLogo } from '../SVG/sberLogo';


import './style.scss'

export interface SBButtonProps {
    /* The `isLoading?: boolean;` is a optional property in the `SBButtonProps` interface. It indicates
    whether the button is in a loading state or not. If `isLoading` is set to `true`, it means that
    the button is currently loading and should display a loading indicator. If `isLoading` is not
    provided or set to `false`, the button should display its normal state. */
    isLoading?: boolean;

    /* The `size: UISize;` property in the `SBButtonProps` interface is specifying the size of the
    button. It is of type `UISize`, which is an enum that defines different size options for the
    button. The possible values for `size` are `SM`, `MD`, `LG`, and `XLG`, which correspond to
    small, medium, large, and extra large sizes respectively. */
    size: UISize;
    
    /* The `actionType` property in the `SBButtonProps` interface is a string literal type that can
    only have one of the three specified values: `'login'`, `'pay'`, or `'credit'`. This property is
    used to indicate the button inner text. */
    actionType: 'login' | 'pay' | 'credit';
    /* The `variant: 'primary' | 'secondary'` property in the `SBButtonProps` interface is specifying
    the variant of the button. */
    variant: 'primary' | 'secondary';
    onClick: (ev: MouseEvent) => void;
}


function SBButton({
    actionType,
    isLoading = false,
    size=UISize.MD,
    variant = 'primary',
}:SBButtonProps) {


    const handleInner = () : string | undefined => {
        switch (actionType) {
            case 'pay':
                return 'Оплатить через СберБизнес';
            case 'credit':
                return 'Купить в кредит';
            case 'login':
                return 'Войти по СберБизнес ID';
            default:{
                const a:never = actionType;
                return a
            }
        }
    }


    return (
        <Button
            className={[
                'sbbutton', 
                `sbbutton__${variant}`,
                `sbbutton__${size}`,
            ].join(' ')}
        >
            {!isLoading 
            ?
            <SVGSberLogo fill={variant === 'primary' ? 'white' : 'grey'}/> 
            : 
            <SVGLoading fill={variant === 'primary' ? 'white' : 'grey'}/>
            }
            {!isLoading && handleInner()}
        </Button>
    )
}

export default SBButton