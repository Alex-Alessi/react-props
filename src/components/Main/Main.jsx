import image from "/600x400.png";

export default function () {
  return (
    <main>
      <div className="container">
        <div className="card">
          <div className="img">
            <img src={image} />
          </div>
          <div className="description">
            <h3>Titolo del post</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              perspiciatis distinctio voluptatem quia, magni, illo beatae labore
              quasi laboriosam itaque fuga ab saepe est non vero id eos voluptas
              architecto!
            </p>
            <button id="button">
              <p>LEGGI DI PIÙ</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
