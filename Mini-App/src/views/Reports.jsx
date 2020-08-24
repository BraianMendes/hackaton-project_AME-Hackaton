<View block>
    <FlexBox width={"100%"} block flexDirection={"column"} alignItems={"center"} alignContent={"center"} justifyContent={"center"}>
        <Title fontSize={30} color={"#ED0059"}>Relatórios</Title>
        <Card borderRadius={15} marginTop={20} border shadow width={300}>
            <Touchable onClick={this.navigateTo}>
                <FlexBox width={"100%"} block flexDirection={"column"} alignItems={"center"} alignContent={"center"} justifyContent={"center"}>
                    <Title>Vendas Diárias</Title>
                    <Text>Comparativos das vendas diárias por mês em relação aos dias da semana</Text>
                    <Image source={require('../assets/pictures/img1.png')} height={200}/>
                </FlexBox>
            </Touchable>
        </Card>
        <Card borderRadius={15} marginTop={20} border shadow width={300}>
            <Title>Público Alvo</Title>
            <Text>Gênero do seu Público</Text>
            <Image source={require('../assets/pictures/img2.png')}/>
        </Card>
        <Card borderRadius={15} marginTop={20} border shadow width={300}>
            <Title>Mapa</Title>
            <Text>Localização do seu público de vendas</Text>
            <Image source={require('../assets/pictures/imgMap.png')}/>
            {/* Nosso Map não está funcionando */}
            {/* <Map
                apiKey={"AIzaSyCes6_jqqIzcpPanBL7dh21ZDGePpuHiws"}
                center={[-22.94980821, -43.19095194]}
                height={200}
                markers={[
                    {
                        lat: - 22.970722,
                        lng: - 43.182365,
                        pin: (
                            <View>
                                <Image source={require('.././assets/svgs/pin_icon.svg')}
                                    width={16} height={16} />
                            </View>
                        ),
                        legend: 'Copacabana',
                    },
                ]}
            /> */}
            <Image source={require('../assets/pictures/img3.png')}/>
        </Card>
        <Card borderRadius={15} marginTop={20} marginBottom={20} border shadow width={300}>
            <Title>Atingimento da Meta Mensal</Title>
            <Text>Quanto você atingiu da sua meta de faturamento para o m~es atual.</Text>
            <Image source={require('../assets/pictures/img4.png')}/>
        </Card>
    </FlexBox>
</View>