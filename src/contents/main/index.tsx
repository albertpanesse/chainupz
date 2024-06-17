const MainContent = ({ children }: any) => {
    return (
        <main>
            <div className="container">
                {children}
            </div>
        </main>
    );
};

export default MainContent;
