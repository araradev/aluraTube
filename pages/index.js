import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
    const estilosDaHomePage = {
        display: "flex",
        flexDirection: "column",
        flex: "1",
    }
    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists}>
                    conteudo
                </TimeLine>
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width:80px;
        height:80px;
        border-radius: 50%;
        margin-right: 15px;
    }
    .user-info{
        margin-top: 50px;
        display:flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: 16px 32px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}
            <section className="user-info">
                <img src={`http://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(props) {
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsNames) => {
                const videos = props.playlists[playlistsNames]
                return (
                    <section>
                        <h2>
                            {playlistsNames}
                        </h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })};
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}