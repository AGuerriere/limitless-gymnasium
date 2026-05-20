import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import HoursHighlight from "@/components/HoursHighlight";
import YearStamp from "@/components/YearStamp";
// HoursHighlight runs client-side to highlight today's hours row

const ASHBOURNE_URL =
  "https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=GRDT2";

const ASCND_BOOKING_URL =
  "https://goteamup.com/p/12305984-ascnd/start/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3";

const ASCND_INSTAGRAM_URL = "https://www.instagram.com/ascnd.bc";

export default function Home() {
  return (
    <>
      <HoursHighlight />
      <Nav />

      {/* ============= HERO ============== */}
      <header className="hero" id="top">
        <div className="hero-photo-bg" />

        <div className="top-meta">
          <span>EST. <b>2022</b> · BALLYCASTLE</span>
          <span>55.2003°N &nbsp; 6.2543°W</span>
        </div>

        <div className="center">
          <div className="eyebrow reveal">A HARDCORE LOCAL GYM · BALLYCASTLE</div>
          <h1 className="reveal">
            TRAIN<br />
            WITHOUT<br />
            <span className="it">limits.</span>
          </h1>
          <p className="tag reveal">
            Independent, locally owned, built for people who want to train properly.
            Serious equipment, qualified staff, and no distractions — just work.
          </p>
        </div>

        <div className="bot-row">
          <div className="ticker">— PUSH · PULL · LEG —</div>
          <a className="scroll-cue" href="#about" aria-label="Scroll">
            <span>Scroll</span>
            <span className="line" />
          </a>
          <div className="ticker">OPEN 7 DAYS · MON–FRI 5:30</div>
        </div>
      </header>

      {/* ============= ABOUT ============= */}
      <section className="s" id="about">
        <div className="inner">
          <div className="section-head">
            <div className="num"><span className="eyebrow"><b>01</b> / About</span></div>
            <div className="ttl"><h2 className="h-section">Built for people<br />who actually train.</h2></div>
          </div>

          <div className="manifesto-body">
            <div className="col-label">— THE&nbsp;ETHOS</div>
            <Reveal>
              <p className="lede">
                Limitless is a small, independent gym in the centre of Ballycastle.
                Founded and run by local people, it&apos;s a straightforward place to train —{" "}
                <em>well-equipped, well-staffed, and open long hours</em> so you can get in
                whenever suits you. No gimmicks, no contracts you can&apos;t get out of.
                Just a good gym where you can make real progress.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="kpi-row">
              <div className="kpi">
                <div className="v">3,200<span style={{ fontSize: ".5em", color: "var(--ink-dim)" }}> sq·ft</span></div>
                <div className="l">Of training floor</div>
              </div>
              <div className="kpi">
                <div className="v">40+</div>
                <div className="l">Stations &amp; machines</div>
              </div>
              <div className="kpi">
                <div className="v">7</div>
                <div className="l">Days a week</div>
              </div>
              <div className="kpi">
                <div className="v">BT54</div>
                <div className="l">Ballycastle</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============= THE GYM ============= */}
      <section className="s" id="gym">
        <div className="inner">
          <div className="section-head">
            <div className="num"><span className="eyebrow"><b>02</b> / The Gym</span></div>
            <div className="ttl">
              <h2 className="h-section">Proper equipment.<br />Well laid out.</h2>
              <p className="eyebrow" style={{ color: "var(--ink-dim)", maxWidth: "520px", lineHeight: "1.7", letterSpacing: ".18em" }}>
                Free-weight floor, plate-loaded machines, dedicated cable stack,
                cardio equipment, and a separate conditioning area.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="gym-grid">
              <div className="tile t1">
                <Image src="/gym/main-floor.png" alt="Main training floor" fill style={{ objectFit: "cover" }} />
                <span className="cap">01 · Main floor</span>
              </div>
              <div className="tile t2">
                <Image src="/gym/free-weights.png" alt="Free weight and machine area" fill style={{ objectFit: "cover" }} />
                <span className="cap">02 · Free weights</span>
              </div>
              <div className="tile t3">
                <Image src="/gym/cables.png" alt="Cable and machine setup" fill style={{ objectFit: "cover" }} />
                <span className="cap">03 · Cables</span>
              </div>
              <div className="tile t4">
                <Image src="/gym/cardio.png" alt="Cardio area" fill style={{ objectFit: "cover" }} />
                <span className="cap">04 · Cardio</span>
              </div>
              <div className="tile t5">
                <Image src="/gym/machines.png" alt="Selectorised machines" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
                <span className="cap">05 · Machines</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============= TEAM ============= */}
      <section className="s" id="team">
        <div className="inner">
          <div className="section-head">
            <div className="num"><span className="eyebrow"><b>03</b> / Team</span></div>
            <div className="ttl">
              <h2 className="h-section">The coaches.</h2>
              <p className="eyebrow" style={{ color: "var(--ink-dim)", maxWidth: "520px", lineHeight: "1.7", letterSpacing: ".18em" }}>
                Qualified, on the floor, and approachable.
                PT sessions can be booked at reception or through the members portal.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="team-grid">

              {/* Aidan — Founder */}
              <div className="coach-founder-row">
                <div className="portrait-wrap">
                  <Image src="/portraits/aidan.png" alt="Aidan — Founder" fill style={{ objectFit: "cover", objectPosition: "center 10%" }} />
                </div>
                <div className="founder-info">
                  <div>
                    <div className="founder-tag">— Founder &amp; Head Coach</div>
                  </div>
                  <h3 className="founder-name">Aidan</h3>
                  <div className="founder-role">Limitless Gymnasium · Est. 2022</div>
                  <p className="founder-bio">
                    Aidan opened Limitless in 2022 with one straightforward goal — to give
                    Ballycastle a proper, independent gym run by people who actually train.
                    He&apos;s on the floor most days and available to help with programming,
                    technique, or just getting started.
                  </p>
                  <div className="founder-creds">
                    <div className="cred"><b>Founder</b> Limitless Gymnasium</div>
                    <div className="cred"><b>Head Coach</b> &amp; Personal Trainer</div>
                  </div>
                </div>
              </div>

              {/* Conall */}
              <article className="coach">
                <div className="portrait">
                  <Image src="/portraits/conall.png" alt="Conall McGlynn" fill style={{ objectFit: "cover", objectPosition: "center 15%" }} />
                </div>
                <div className="id">
                  <div className="role">— Welcomes</div>
                  <div className="name">Conall<br />McGlynn</div>
                </div>
                <div className="creds">
                  <div className="cred"><b>L2</b> Gym Instructor</div>
                  <div className="cred"><b>L3</b> Personal Training</div>
                  <div className="cred"><b>L4</b> Nutrition · Weight Mgmt &amp; Athletic Performance</div>
                </div>
                <div className="socials">IG @mcglynn_fitness</div>
              </article>

              {/* Eilish */}
              <article className="coach">
                <div className="portrait">
                  <Image src="/portraits/eilish.png" alt="Eilish McCaw" fill style={{ objectFit: "cover", objectPosition: "center 12%" }} />
                </div>
                <div className="id">
                  <div className="role">— Welcomes</div>
                  <div className="name">Eilish<br />McCaw</div>
                </div>
                <div className="creds">
                  <div className="cred"><b>L2</b> Fitness Instructor</div>
                </div>
                <div className="socials">IG @eilish_elite.fitness</div>
              </article>

              {/* Tiarnan */}
              <article className="coach">
                <div className="portrait">
                  <Image src="/portraits/tiarnan.png" alt="Tiarnan Shepherd" fill style={{ objectFit: "cover", objectPosition: "center 8%" }} />
                </div>
                <div className="id">
                  <div className="role">— Welcomes</div>
                  <div className="name">Tiarnan<br />Shepherd</div>
                </div>
                <div className="creds">
                  <div className="cred"><b>L2</b> Fitness Instructor</div>
                </div>
                <div className="socials">IG @tiarnan_shepherd</div>
              </article>

              {/* Danny */}
              <article className="coach">
                <div className="portrait">
                  <Image src="/portraits/danny.png" alt="Danny Scullion" fill style={{ objectFit: "cover", objectPosition: "center 5%" }} />
                </div>
                <div className="id">
                  <div className="role">— Welcomes</div>
                  <div className="name">Danny<br />Scullion</div>
                </div>
                <div className="creds">
                  <div className="cred"><b>L2</b> Fitness Instructor</div>
                </div>
                <div className="socials">IG @ds_coaching.limitless</div>
              </article>

              {/* Empty cell to fill last row */}
              <div style={{ borderBottom: "1px solid var(--line)" }} />

            </div>
          </Reveal>
        </div>
      </section>

      {/* ============= VISIT ============= */}
      <section className="s" id="visit">
        <div className="inner">
          <div className="section-head">
            <div className="num"><span className="eyebrow"><b>04</b> / Visit</span></div>
            <div className="ttl"><h2 className="h-section">Open early.<br />Open late.</h2></div>
          </div>

          <Reveal>
            <div className="visit-grid">
              <div>
                <div className="col-title">— Opening Hours</div>
                <div className="hours-list" id="hours">
                  <div className="row" data-day="1"><span className="day">Monday</span><span className="h">05:30 — 21:30</span></div>
                  <div className="row" data-day="2"><span className="day">Tuesday</span><span className="h">05:30 — 21:30</span></div>
                  <div className="row" data-day="3"><span className="day">Wednesday</span><span className="h">05:30 — 21:30</span></div>
                  <div className="row" data-day="4"><span className="day">Thursday</span><span className="h">05:30 — 21:30</span></div>
                  <div className="row" data-day="5"><span className="day">Friday</span><span className="h">05:30 — 21:30</span></div>
                  <div className="row" data-day="6"><span className="day">Saturday</span><span className="h">07:00 — 15:00</span></div>
                  <div className="row" data-day="0"><span className="day">Sunday</span><span className="h">08:00 — 14:00</span></div>
                </div>
                <p className="eyebrow" style={{ marginTop: "24px", color: "var(--ink-faint)", letterSpacing: ".2em", lineHeight: "1.7" }}>
                  Holiday hours posted to Instagram &amp; Facebook.
                </p>
              </div>

              <div>
                <div className="col-title">— Find Us · Contact</div>
                <div className="contact-block">
                  <div className="contact-item">
                    <div className="label">Address</div>
                    <div className="val">
                      Limitless Gymnasium<br />
                      Ballycastle, Co. Antrim<br />
                      BT54
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="label">Contact</div>
                    <div className="val" style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "var(--ink-dim)", fontFamily: "var(--font-manrope)", fontWeight: 400, lineHeight: 1.6 }}>
                      All enquiries through Instagram — DM us and we&apos;ll get back to you.
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="label">Socials</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <a className="val" href="https://www.instagram.com/limitless.gymnasium/" target="_blank" rel="noopener noreferrer">IG @limitless.gymnasium</a>
                      <a className="val" href="https://www.facebook.com/p/Limitless-Gymnasium-61556424757610/" target="_blank" rel="noopener noreferrer">FB Limitless Gymnasium</a>
                      <a className="val" href={ASCND_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">IG @ascnd.bc — Classes</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============= CLASSES (ASCND) ============= */}
      <section className="s" id="classes">
        <div className="inner">
          <div className="section-head">
            <div className="num"><span className="eyebrow"><b>05</b> / Classes</span></div>
            <div className="ttl">
              <h2 className="h-section">Group classes.<br /><span className="it">Book your spot.</span></h2>
              <p className="eyebrow" style={{ color: "var(--ink-dim)", maxWidth: "520px", lineHeight: "1.7", letterSpacing: ".18em" }}>
                Classes at Limitless are run by our sister company Ascnd.
                Book directly through their platform — all levels welcome.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="ascnd-block">
              <div className="ascnd-info">
                <div className="col-title">— About Ascnd</div>
                <p style={{ fontSize: "clamp(15px, 1.2vw, 17px)", color: "var(--ink-dim)", lineHeight: "1.65", maxWidth: "560px" }}>
                  Ascnd is the class provider operating out of Limitless Gymnasium.
                  From conditioning and circuits to yoga and more — their timetable runs
                  across the week so you can fit a class around your regular training.
                </p>
                <div style={{ marginTop: "24px" }}>
                  <a
                    className="val"
                    href={ASCND_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-archivo)", fontWeight: 600, fontSize: "clamp(15px, 1.2vw, 17px)", borderBottom: "1px solid var(--line-2)", paddingBottom: "2px", transition: "border-color 0.2s" }}
                  >
                    IG @ascnd.bc ↗
                  </a>
                </div>
              </div>
              <div className="ascnd-cta">
                <a className="btn-big" href={ASCND_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <span>Book a Class</span>
                  <span className="arr">→</span>
                </a>
                <div className="btn-meta">External · goteamup.com · Ascnd</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============= MEMBERS CTA ============= */}
      <section className="members-section" id="members">
        <div className="inner">
          <span className="eyebrow">— Memberships &amp; Day Passes</span>
          <h2>Join, or just <span className="it">drop in.</span></h2>
          <p>
            Full memberships and day passes are both handled through{" "}
            <b style={{ color: "var(--ink)", fontWeight: 600 }}>Ashbourne</b> — our membership management partner.
            Sign up for a membership or buy a day pass over there.
          </p>
          <a className="btn-big" href={ASHBOURNE_URL} target="_blank" rel="noopener noreferrer">
            <span>Memberships &amp; Day Passes</span>
            <span className="arr">→</span>
          </a>
          <div className="btn-meta">External · ashbournemanagement.co.uk</div>
        </div>
      </section>

      {/* ============= FOOTER ============= */}
      <footer>
        <div className="inner">
          <div className="foot-mark" aria-hidden="true">LIMITLESS</div>
          <div className="row">
            <div>
              <div className="col-label">— Visit</div>
              <div className="links-v">
                <span>Ballycastle, Co. Antrim · BT54</span>
                <a href="https://www.instagram.com/limitless.gymnasium/" target="_blank" rel="noopener noreferrer">Contact via Instagram</a>
                <a href={ASCND_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Ascnd (Classes) on Instagram</a>
              </div>
            </div>
            <div>
              <div className="col-label">— Site</div>
              <div className="links-v">
                <a href="#about">About</a>
                <a href="#gym">The Gym</a>
                <a href="#team">Team</a>
                <a href="#visit">Visit &amp; Hours</a>
                <a href="#classes">Classes</a>
                <a href="#members">Members</a>
              </div>
            </div>
            <div>
              <div className="col-label">— Follow</div>
              <div className="links-v">
                <a href="https://www.instagram.com/limitless.gymnasium/" target="_blank" rel="noopener noreferrer">Limitless · Instagram</a>
                <a href="https://www.facebook.com/p/Limitless-Gymnasium-61556424757610/" target="_blank" rel="noopener noreferrer">Limitless · Facebook</a>
                <a href={ASCND_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Ascnd · Instagram ↗</a>
                <a href={ASHBOURNE_URL} target="_blank" rel="noopener noreferrer">Members Portal ↗</a>
              </div>
            </div>
          </div>
          <div className="baseline">
            <span>© <YearStamp /> Limitless Gymnasium · Ballycastle</span>
            <span>No cookies · No tracking</span>
          </div>
        </div>
      </footer>
    </>
  );
}
