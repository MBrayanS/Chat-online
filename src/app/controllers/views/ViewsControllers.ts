import { IRenderizarView } from "../../adapters";

export class ViewsControllers {

    public static home( render: IRenderizarView ) {
        render('home')
    }

    public static cadastrar( render: IRenderizarView ) {
        render('cadastrar')
    }

    public static logar( render: IRenderizarView ) {
        render('logar')
    }
}