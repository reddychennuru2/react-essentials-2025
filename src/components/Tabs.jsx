export default function Tabs ({children, buttons, buttonsContainer}) {
    // dynamic component - as buttonsContainer component is not present we are creating const
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
        {children}
        </>
    );
}