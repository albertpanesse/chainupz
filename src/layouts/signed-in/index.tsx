import Header from '../../elements/header';
import Footer from '../../elements/footer';

const SignedInLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default SignedInLayout;
