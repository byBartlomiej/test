class App extends React.Component {
    state = {
        text1Active: true,
        text2Active: true,
        text3Active: true,
    }
    handleClickTittle1 = () => {
        this.setState({
            text1Active: !this.state.text1Active
        })
    }
    handleClickTittle2 = () => {
        this.setState({
            text2Active: !this.state.text2Active
        })
    }
    handleClickTittle3 = () => {
        this.setState({
            text3Active: !this.state.text3Active
        })
    }
    render() {
        const p1Text1 = `Zakończenie montażu - 10 kwietnia 1984`;
        const p2Text1 = `Masa - 68 ton`;
        const p3Text1 = `Długość: 37,2 m`;
        const p4Text1 = `Wysokość: 17,2 m`;
        const p5Text1 = `Rozpiętość skrzydeł: 23,7 m`;
        const p6Text1 = `Całkowita długość przy starcie wraz z pomocniczym silnikiem na paliwo stałe - 56 m`;
        const p7Text1 = `Napęd: trzy silniki. Moc każdego z nich to ponad 12 milionów koni mechanicznych.`;
        const p1Text2 = `Pierwszy start promu Atlantis miał miejsce 3 października 1985 roku. Wahadłowiec dostarczył na orbitę objęty tajemnicą ładunek Departamentu Obrony USA. Była to jedna z pięciu tajnych misji związanych z programem wojen gwiezdnych. W roku 1989 Atlantis wyniósł na swoim pokładzie sondy kosmiczne Magellan oraz Galileo, w roku 1991 Teleskop kosmiczny Comptona, w roku 2008 laboratorium kosmiczne Columbus – Moduł ISS skonstruowany przez ESA. W 2009 wykonał ostatnią misję serwisową do Teleskopu Hubble’a (STS-125), a w 2011 ostatni lot w programie wahadłowców (STS-135).`;
        const p1Text3 = `Prom kosmiczny Atlantis (czwarty wahadłowiec NASA) wykonał 33 misje, spędził w przestrzeni 306 dni, zaliczył 4848 orbit, przeleciał łącznie 203 mln km, liczba astronautów na pokładzie: 191, liczba misji do stacji orbitalnej Mir: 7, liczba misji do ISS: 12.`;
        return (
            <>
                <h2>Prom kosmiczny atlantis</h2>
                <h2 onClick={this.handleClickTittle1} class="point">{this.state.text1Active ? "dane" : <><p>{p1Text1}</p><p>{p2Text1}</p><p>{p3Text1}</p><p>{p4Text1}</p> <p>{p5Text1}</p><p>{p6Text1}</p><p>{p7Text1}</p></>}</h2>
                <h2 onClick={this.handleClickTittle2} class="point">{this.state.text2Active ? "historia" : <p>{p1Text2}</p>}</h2>
                <h2 onClick={this.handleClickTittle3} class="point">{this.state.text3Active ? "ciekawostki" : <p>{p1Text3}</p>}</h2>
            </>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"))