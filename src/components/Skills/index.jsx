import '../../styles/Skills.css';

function Skills() {
    return (
        <section id='Skills'>
              <h2>Mes compétences</h2>
              <div className='grid-skills'>
              <div>
                <h3>Front-end</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
              </div>
              <div>
                <h3>Back-end</h3>
                <ul>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h3>Outils</h3>
                <ul>
                    <li>Visual Studio Code</li>
                    <li>Git & Github</li>
                    <li>Npm</li>
                </ul>
              </div>
              </div>
        </section>
    )
}

export default Skills;