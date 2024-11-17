import { Component, ReactNode } from 'react';
import './Content.css';

interface State {
  areBirthdayDetailsActive: boolean;
  isEducationActive: boolean;
}

export default class Content extends Component<object, State> {
  state: State = {
    areBirthdayDetailsActive: false,
    isEducationActive: false,
  };

  handleAreBirthdayDetailsActive = (areActive: boolean) => {
    this.setState({
      areBirthdayDetailsActive: areActive,
    });
  };

  handleIsEducationActive = (areActive: boolean) => {
    this.setState({
      isEducationActive: areActive,
    });
  };

  handleBirthDetailsClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const birthDetails = e.target as HTMLParagraphElement;

    this.setState(prevState => {
      const newState = !prevState.areBirthdayDetailsActive;

      birthDetails.style.backgroundColor = newState ? '#0000FF' : '#6E0D25';
      birthDetails.style.color = newState ? '#C1ABA6' : '#FFF';

      return { areBirthdayDetailsActive: newState };
    });
  };

  handleEducationClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const education = e.target as HTMLParagraphElement;

    this.setState(prevState => {
      console.log(1);
      const newState = !prevState.isEducationActive;

      education.style.backgroundColor = newState ? '#800080' : '#008080';
      education.style.color = newState ? '#32CD32' : '#FFA500';
      return { isEducationActive: newState };
    });
  };

  render(): ReactNode {
    return (
      <>
        <p id="birth-details" onClick={this.handleBirthDetailsClick}>
          Дата та місце народження: 8 серпня 2005 року, м. Київ
        </p>
        <p className="education" onClick={this.handleEducationClick}>
          Освіта: Ліцей "Успіх", м. Київ; Київський політехнічний інститут ім.
          Ігоря Сікорського
        </p>

        <p>Хобі:</p>
        <ul>
          <li>Баскетбол</li>
          <li>Програмування</li>
          <li>Шахи</li>
        </ul>

        <p>Улюблені книги:</p>
        <ol>
          <li>Пісня Льойду й Полумʼя</li>
          <li>Граф Монте-Крісто</li>
          <li>Вбивство у східному експресі</li>
        </ol>

        <p>
          Львів - місто, яке зачаровує з першого погляду. Кожна вуличка Львова
          наповнена стародавнім шармом, ароматами кави, духом романтики і
          архітектурною довершеністю. Кожен його елемент приховує цікаві історії
          та інтригуючі загадкові легенди. Львів - це культурна столиці України,
          Львів неповторний та незмінний, Львів - історія, що втілена у силуетах
          його архітектурних композицій. Це місто, яке "охороняють" кам'яні
          благородні леви та яке змусить Вас повірити в мрію. Загадковості
          Львова не має меж.
        </p>
      </>
    );
  }
}
