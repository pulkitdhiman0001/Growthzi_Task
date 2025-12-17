import "./Journey.css";
import Button from "../../components/Button/Button";
const Journey = () => {
  return (
    <section class="journey">
      <h1 class="journey-title">
        Journey<span>()</span>
      </h1>

      <div class="timeline">
        <div class="line"></div>

        <div class="timeline-item left">
          <div class="content">
            <h3>lorem ipsum</h3>
            <p>
              Eum earum possimus qui sunt possimus aut tempora aliquid ut
              veritatis architecto et voluptate enim id sint possimus.
            </p>
            <Button
              text="Go to website"
              
              onClick={() => console.log("Clicked")}
            />
          </div>
          <span class="dot"></span>
        </div>

        <div class="timeline-item right">
          <span class="dot"></span>
          <div class="content">
            <h3>lorem ipsum</h3>
            <p>
              Eum earum possimus qui sunt possimus aut tempora aliquid ut
              veritatis architecto et voluptate enim id sint possimus.
            </p>
            <Button
              text="Go to website"
              
              onClick={() => console.log("Clicked")}
            />
          </div>
        </div>

        <div class="timeline-item left">
          <div class="content">
            <h3>lorem ipsum</h3>
            <p>
              Eum earum possimus qui sunt possimus aut tempora aliquid ut
              veritatis architecto et voluptate enim id sint possimus.
            </p>
            <Button
              text="Go to website"
              
              onClick={() => console.log("Clicked")}
            />
          </div>
          <span class="dot"></span>
        </div>

        <div class="timeline-item right">
          <span class="dot"></span>
          <div class="content">
            <h3>lorem ipsum</h3>
            <p>
              Eum earum possimus qui sunt possimus aut tempora aliquid ut
              veritatis architecto et voluptate enim id sint possimus.
            </p>
            <Button
              text="Go to website"
              
              onClick={() => console.log("Clicked")}
            />
          </div>
        </div>
      </div>







       <div class="timeline-mobile">
        <div class="line"></div>

        <div class="timeline-item left">
          <div class="content">
            <h3>lorem ipsum</h3>
            <p>
              Eum earum possimus qui sunt possimus aut tempora aliquid ut
              veritatis architecto et voluptate enim id sint possimus.
            </p>
            <Button
              text="Go to website"
              
              onClick={() => console.log("Clicked")}
            />
          </div>
          <span class="dot"></span>
        </div>

        <div class="timeline-item right">
          <span class="dot"></span>
          <div class="content">
            <h3>lorem ipsum</h3>
            <p>
              Eum earum possimus qui sunt possimus aut tempora aliquid ut
              veritatis architecto et voluptate enim id sint possimus.
            </p>
            <Button
              text="Go to website"
              
              onClick={() => console.log("Clicked")}
            />
          </div>
        </div>

        <div class="timeline-item left">
          <div class="content">
            <h3>lorem ipsum</h3>
            <p>
              Eum earum possimus qui sunt possimus aut tempora aliquid ut
              veritatis architecto et voluptate enim id sint possimus.
            </p>
            <Button
              text="Go to website"
              
              onClick={() => console.log("Clicked")}
            />
          </div>
          <span class="dot"></span>
        </div>

        <div class="timeline-item right">
          <span class="dot"></span>
          <div class="content">
            <h3>lorem ipsum</h3>
            <p>
              Eum earum possimus qui sunt possimus aut tempora aliquid ut
              veritatis architecto et voluptate enim id sint possimus.
            </p>
            <Button
              text="Go to website"
              
              onClick={() => console.log("Clicked")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
