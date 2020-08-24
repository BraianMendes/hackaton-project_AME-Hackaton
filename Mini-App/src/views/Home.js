import Ame from 'ame-super-app-client'

export default class Home {

    // Utilize a variável state para controlar o estado da aplicação.
    state = {

        // Estes são os itens utilizados pelo listView dentro do arquivo Home.jsx
        items: [
            {
                key: '1',
                title: 'Sobre',
                subtitle: 'Detalhes deste mini-app',
                to: 'About'
            },
            {
                key: '2',
                title: 'Documentação',
                subtitle: 'Como construir seu miniapp',
                to: 'More'
            }]
    }

    // Esta função navega entre as telas
    navigateTo = (item) => {
        Ame.navigation.navigate('Reports')
    }
}
