import styles from './styles.module.css'
export default function Testing() {
    return (
        <div className={styles.body}>
  <header className={styles.header}>
    <ul className={styles.group_header}>
      <button className={styles.aside_btn} title="Сайдбар" role="button">
        <i className={`${styles["bi"]} ${styles["bi-list"]}`} />
      </button>
      <button className={styles.aside_btn} title="Сайдбар" role="button">
        <i className={`${styles["bi"]} ${styles["bi-person-circle"]}`} />
      </button>
      <div className={styles.search_container}>
        <div className={styles.icon_searc} />
        <input className={styles.search} type="search" placeholder="Поиск по названию" />
      </div>
    </ul>

    <div className={styles.logo_container}>
      <img src="/img/logo sberdata_original_main_BG.svg" alt="Logo_SberData" className="logo" />
    </div>
  </header>
  <aside className={styles.aside}>
    <a className={styles.aside_btn} title="Загрузить реплику в КАП" href="#" role="button">
      <i className={`${styles["bi"]} ${styles["bi-cloud-arrow-up-fill"]}`}/>
    </a>
    <a className={styles.aside_btn} title="Главная" href="#" role="button">
      <i className={`${styles["bi"]} ${styles["bi-grid-1x2-fill"]}`} />
    </a>
    <a className={styles.aside_btn} title="Источники" href="/source.html" role="button">
      <i className={`${styles["bi"]} ${styles["bi-list-columns-reverse"]}`} />
    </a>
    <a className={styles.aside_btn} title="Дорожная карта" href="/RoadMap.html" role="button">
      <i className={`${styles["bi"]} ${styles["bi-bar-chart-steps"]}`} />
    </a>
    <a className={styles.aside_btn} title="Мониторинг ядер и потоков" href="#" role="button">
      <i className={`${styles["bi"]} ${styles["bi-display"]}`} />
    </a>
    <a className={styles.aside_btn} title="Статус реплики" href="#" role="button">
      <i className={`${styles["bi"]} ${styles["bi-activity"]}`} />
    </a>
    <a className={styles.aside_btn} title="Поиск объектов реплики" href="#" role="button">
      <i className={`${styles["bi"]} ${styles["bi-search"]}`} />
    </a>
    <a className={styles.aside_btn} title="Автотесты" href="#" role="button">
      <i className={`${styles["bi"]} ${styles["bi-speedometer"]}`} />
    </a>
    <a className={styles.aside_btn} title="Поддержка" href="#" role="button">
      <i className={`${styles["bi"]} ${styles["bi-question-lg"]}`} />
    </a>
  </aside>
  <main className={styles.main}>
    <div className={styles.search_panel}>
      <div className={styles.search_panel_group}>
        <input className={`${styles["inpt-form"]} ${styles["dt"]}`} type="date" />
        <input className={`${styles["inpt-form"]} ${styles["dt"]}`} type="date" />
        <div className={styles.form_group}>
          <div className={styles.select_wrapper}>
            <select name={styles.productType} id="example" className="select">
              <option value={1}>Блок</option>
              <option value={2}>УБ</option>
              <option value={3}>УБ</option>
              <option value={4}>Все</option>
            </select>
          </div>
        </div>
        <div className={styles.form_group}>
          <div className={styles.select_wrapper}>
            <select name={styles.productType} id="example" className="select">
              <option value={1}>Контур</option>
              <option value={2}>РБ</option>
              <option value={3}>КБ</option>
              <option value={4}>DBank</option>
              <option value={5}>Все</option>
            </select>
          </div>
        </div>
        <div className={styles.form_group}>
          <div className={styles.select_wrapper}>
            <select name={styles.productType} id="example" className="select">
              <option value={1}>Этап</option>
              <option value={2}>ИФТ</option>
              <option value={3}>ПСИ</option>
              <option value={4}>ПРОМ</option>
              <option value={5}>ОЭ</option>
              <option value={6}>ПЭ</option>
              <option value={7}>Все</option>
            </select>
          </div>
        </div>
      </div>
      <div className={`${styles["search_container"]} ${styles["sp_srch"]}`}>
        <div className={styles.icon_searc} />
        <input className={styles.search} type="search" placeholder="Поиск по названию" />
      </div>
    </div>
    <div className={styles.filter_download}>
      <div className={styles.close_btn}>
        <button className={styles.close_filtr_btn}>Сбросить</button>
        <button className={styles.close_filtr_btn}><i className={`${styles["bi"]} ${styles["bi-x-circle"]} ${styles["close_icon"]}`} /> 20.02.2024</button>
        <button className={styles.close_filtr_btn}><i className={`${styles["bi"]} ${styles["bi-x-circle"]} ${styles["close_icon"]}`} /> 20.02.2024</button>
        <button className={styles.close_filtr_btn}><i className={`${styles["bi"]} ${styles["bi-x-circle"]} ${styles["close_icon"]}`} /> УБ</button>
        <button className={styles.close_filtr_btn}><i className={`${styles["bi"]} ${styles["bi-x-circle"]} ${styles["close_icon"]}`} /> РБ</button>
        <button className={styles.close_filtr_btn}><i className={`${styles["bi"]} ${styles["bi-x-circle"]} ${styles["close_icon"]}`} /> Все</button>
      </div>
      <div className={styles.group_download}>
        <button className={styles.download_btn}><i className={`${styles["bi"]} ${styles["bi-cloud-download"]}`} style={{"marginRight":"4px"}} />Excel</button>
        <button className={styles.download_btn}><i className={`${styles["bi"]} ${styles["bi-cloud-download"]}`} style={{"marginRight":"4px"}} />PDF</button>
      </div>
    </div>
    <div className={styles.group_button_source}>
      <button className={styles.bttn_grp_source}>Все источники</button>
      <button className={styles.bttn_grp_source}>Сдвиги ПСИ<span className={styles.allert}>1</span></button>
      <button className={styles.bttn_grp_source}>Сдвиг СМД<span className={styles.allert}>1</span></button>
      <button className={styles.bttn_grp_source}>Общий сдвиг СМД<span className={styles.allert}>1</span></button>
    </div>
    <div className={styles.table_source_container}>
      <div className={styles.table_respons}>
        <table className={styles.table_style}>
          <thead>
            <tr>
              <th scope="col">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox" />
                  </label>
                </div>
              </th>
              <th scope="col">Источник</th>
              <th scope="col">Блок</th>
              <th scope="col">Контур</th>
              <th scope="col">Эпик</th>
              <th scope="col">Статус</th>
              <th scope="col">Отв. SD</th>
              <th scope="col">Тек. ПСИ</th>
              <th scope="col">Тек. СМД</th>
              <th scope="col">Общ. СМД</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox" />
                  </label>
                </div>
              </td>
              <td className={styles.source_name}><a href="/RoadMap.html">Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес</a></td>
              <td><div className={styles.bdg}>УБ</div></td>
              <td><div className={styles.bdg}>РБ</div></td>
              <td><div className={`${styles["bdg"]} ${styles["neutral"]} `}>Загружается</div></td>
              <td><div className={`${styles["bdg"]} ${styles["prom"]} `}>ПРОМ</div></td>
              <td><div className={styles.bdg}><a href="ivanov.i.i@sberbank.ru">Иванов И.И.</a></div></td>
              <td><div className={styles.bdg}>0 дн</div></td>
              <td><div className={styles.bdg}>0 дн</div></td>
              <td><div className={`${styles["bdg"]} ${styles["bad"]} `}>+2 мес</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox" />
                  </label>
                </div>
              </td>
              <td className={styles.source_name}><a href="#">Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес</a></td>
              <td><div className="bdg">УБ</div></td>
              <td><div className="bdg">РБ</div></td>
              <td><div className="bdg good">Загружен в КАП</div></td>
              <td><div className="bdg prom">ПРОМ</div></td>
              <td><div className="bdg"><a href="ivanov.i.i@sberbank.ru">Иванов И.И.</a></div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox" />
                  </label>
                </div>
              </td>
              <td className={styles.source_name}><a href="#">Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес</a></td>
              <td><div className="bdg">УБ</div></td>
              <td><div className="bdg">РБ</div></td>
              <td><div className="bdg neutral">Загружается</div></td>
              <td><div className="bdg ift">ИФТ</div></td>
              <td><div className="bdg"><a href="ivanov.i.i@sberbank.ru">Иванов И.И.</a></div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox" />
                  </label>
                </div>
              </td>
              <td className={styles.source_name}><a href="#">Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес</a></td>
              <td><div className="bdg">УБ</div></td>
              <td><div className="bdg">РБ</div></td>
              <td><div className="bdg">В ожидании</div></td>
              <td><div className="bdg psi">ПСИ</div></td>
              <td><div className="bdg"><a href="ivanov.i.i@sberbank.ru">Иванов И.И.</a></div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox" />
                  </label>
                </div>
              </td>
              <td className={styles.source_name}><a href="#">Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес</a></td>
              <td><div className="bdg">УБ</div></td>
              <td><div className="bdg">РБ</div></td>
              <td><div className="bdg">В ожидании</div></td>
              <td><div className="bdg prom">ПРОМ</div></td>
              <td><div className="bdg"><a href="ivanov.i.i@sberbank.ru">Иванов И.И.</a></div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox" />
                  </label>
                </div>
              </td>
              <td className={styles.source_name}><a href="#">Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес</a></td>
              <td><div className="bdg">УБ</div></td>
              <td><div className="bdg">РБ</div></td>
              <td><div className="bdg good">Загружен в КАП</div></td>
              <td><div className="bdg oe">ОЭ</div></td>
              <td><div className="bdg"><a href="ivanov.i.i@sberbank.ru">Иванов И.И.</a></div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox" />
                  </label>
                </div>
              </td>
              <td className={styles.source_name}><a href="#">Глобальное Инвестиционное Сотрудничество, прямых инвестиция в малый и средный бизнес</a></td>
              <td><div className="bdg">УБ</div></td>
              <td><div className="bdg">РБ</div></td>
              <td><div className="bdg good">Загружен в КАП</div></td>
              <td><div className="bdg pe">ПЭ</div></td>
              <td><div className="bdg"><a href="ivanov.i.i@sberbank.ru">Иванов И.И.</a></div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
              <td><div className="bdg">0 дн</div></td>
            </tr>
          </tbody>
        </table></div>
    </div>
  </main>
</div>
    )
}
