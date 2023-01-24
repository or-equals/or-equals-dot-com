<script>
  function triggerCalendly() {
    Calendly.initPopupWidget({url: 'https://calendly.com/or-equals/30-minute-discovery-call'});
  }
</script>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container">

    <!-- Brand -->
    <a class="navbar-brand" href="./">
      <img src="./img/or-equals-logo.png" alt="Or Equals" class="navbar-brand-img">
      </a>

      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="navbarCollapse">

        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fe fe-x"></i>
        </button>

        <!-- Navigation -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#services" >
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#our-work" >
              Our Work
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" >
              Why Or Equals?
            </a>
          </li>
        </ul>

        <button class="navbar-btn btn btn-sm btn-primary white lift ml-auto" on:click={triggerCalendly}>
          Get in touch
        </button>

      </div>

    </div>
  </nav>


  <section class="pt-4 pt-md-11">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-5 col-lg-6 order-md-2">

          <!-- Image -->
          <img src="/img/patient_pilot_award-min.png" class="img-fluid mw-md-150 mw-lg-100 mb-6 mb-md-0" alt="...">

          </div>
          <div class="col-12 col-md-7 col-lg-6 order-md-1">

            <!-- Heading -->
            <h1 class="display-3 text-center text-md-left">
              Award-Winning <span class="text-primary">Business Software Development</span><br>
            </h1>

            <!-- Text -->
            <p class="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes.
            </p>

            <!-- Buttons -->
            <div class="text-center text-md-left">
              <a href="#our-work" class="btn btn-primary shadow lift mr-1">
                See our work <i class="fe fe-arrow-right d-none d-sm-inline ml-3"></i>
              </a>

              <a class="btn btn-secondary shadow lift mr-1 d-lg-none" href="mailto:josh@ghed.dev?subject=Tell Us About Your Project&body=Or just call Josh at 352-256-6111" target="_blank">
                Get in touch
              </a>
            </div>

          </div>
        </div> <!-- / .row -->
      </div> <!-- / .container -->
    </section>

  <!-- FEATURES
  ================================================== -->
  <section class="py-8 py-md-11 border-bottom">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <!-- Icon -->
          <div class="icon text-primary mb-3">
            <img src="/img/phoenix.png" class="img-fluid mh-40" alt="Realtime with Phoenix">
            </div>

            <!-- Text -->
            <p class="text-muted mb-6 mb-md-0">
              The Elixir language's Phoenix framework is the epitome of cutting edge open source software. With Phoenix, we build highly interactive realtime web applications using the same technology of our nation's rock solid telecomm network.
            </p>

          </div>
          <div class="col-12 col-md-6">
            <!-- Icon -->
            <div class="icon text-primary mb-3">
              <img src="/img/rails.png" class="img-fluid mh-40" alt="Rapid development with Rails">
              </div>

              <!-- Text -->
              <p class="text-muted mb-6 mb-md-0">
                The gold standard of getting from back-of-the-napkin idea to market quickly is Ruby on Rails. Twitter, AirBnB, Twitch, and Hulu all began with small, highly productive teams using this technology.
              </p>
            </div>
          </div> <!-- / .row -->
  </div> <!-- / .container -->
  </section>

  <!-- ABOUT
  ================================================== -->
  <section class="pt-8 pt-md-11 bg-gradient-light" id='services'>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 text-center">

          <!-- Badge -->
          <span class="badge badge-pill badge-success-soft mb-3">
            <span class="h6 text-uppercase">Services</span>
          </span>

          <!-- Heading -->
          <h2 class="font-weight-bold">
            Instead of spending money on software, let's build software that makes you money.
          </h2>

          <!-- Text -->
          <p class="font-size-lg text-gray-700 mb-9">
            From rescuing a project, to augmenting your team, or making your business more efficient, we've got you covered.
          </p>

        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 text-center aos-init aos-animate" data-aos="fade-up">

          <!-- Icon -->
          <div class="icon icon-lg mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>
          </div>

          <!-- Heading -->
          <h3 class="font-weight-bold">
            Web Development
          </h3>

          <!-- Text -->
          <p class="text-muted mb-8">
            We use best-in-class technologies (Phoenix/Rails) to rapidly build reliable software that remedies your growing business' most acute inefficiencies.
          </p>

        </div>
        <div class="col-12 col-md-6 text-center aos-init aos-animate" data-aos="fade-up">

          <!-- Icon -->
          <div class="icon icon-lg mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z" fill="#335EEA"></path><path d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z" fill="#335EEA" opacity=".3"></path></g></svg>
          </div>

          <!-- Heading -->
          <h3 class="font-weight-bold">
            Mobile Development
          </h3>

          <!-- Text -->
          <p class="text-muted mb-8 mb-lg-0">
            You need your office staff to know exactly what's going on in the field. We'll keep everyone on the same page with a Flutter mobile application. No backend yet? We do that too.
          </p>

        </div>
      </section>

      <section class="pt-10 pt-md-12">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">

              <!-- Heading -->
              <h2 id="our-work">
                Our customers streamline their tedious processes with bespoke software.
              </h2>

              <!-- Text -->
              <p class="font-size-lg text-muted mb-7 mb-md-9">
                Here are a few projects that we've done over the years.
              </p>

            </div>
          </div> <!-- / .row -->
          <div class="row">
            <div class="col-12">

              <!-- Card -->
              <div class="card card-row shadow-light-lg mb-6">
                <div class="row no-gutters">
                  <div class="col-12 position-md-static">

                    <!-- Slider -->
                    <div class="position-md-static" id="blogSlider">
                      <div class="w-100">
                        <!-- Body -->
                        <div class="card-body">
                          <div class="relative mx-auto px-6 py-8 max-w-7xl">
                            <div class="flex flex-col gap-8 ">
                              <h2 class="sm:text-3xl font-black text-charcoal">Local Fare Jax</h2>
                              <div class="object-cover image-size" style="position: relative; padding-bottom: 56.25%; height: 0;">
                                <iframe src="https://www.loom.com/embed/af9c2451db234617bad601a2ad2a070b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                              </div>
                              <div class="flex flex-col gap-6">
                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  It all started with frustration that their off the shelf software had an 8-step online store sign up. We did some due diligence and discovered that their software platform belonged to a bankrupt company that hadn't done a major update in over 5 years.
                                  We built them an entire platform that:
                                  <ul>
                                    <li>* Reduced their sign up to 4 steps</li>
                                    <li>* Delivered massive speed improvements due to building it on the lightning-fast Phoenix LiveView technology</li>
                                    <li>* Built a bespoke software algorithm for calculating deliveries/logistics</li>
                                    <li>* Removed the need for member passwords with magic link login</li>
                                    <li>* Delivered a full routing system, from mobile app, to inner staff realtime routing interface, and updates for their members</li>
                                    <li>* Pioneered a completely custom online store, never before done in LiveView</li>
                                    <li>* Complete inventory management system that tracks their item quantities against what was purchased in the store</li>
                                    <li>* Pioneered an automatic allergy-to-item matching algorithm that keeps members safe by auto-substituting items with allergens</li>
                                    <li>* Painlessly serves 3,000+ families in Jacksonville, FL</li>
                                  </ul>

                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  Technologies: Phoenix LiveView - Elixir - PostgresSQL
                                  <br>
                                  Engagement: Custom Software Build
                                  <br>
                                  Website: <a href="www.localfarejax.com" target="_blank">localfarejax.com</a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="relative mx-auto px-6 py-8 max-w-7xl">
                            <div class="flex flex-col gap-8 ">
                              <h2 class="sm:text-3xl font-black text-charcoal">Metalink</h2>
                              <div class="object-cover image-size" style="position: relative; padding-bottom: 56.25%; height: 0;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/0b9bf2893a6744ab94dc902a45651b16" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                              </div>
                              <div class="flex flex-col gap-6">
                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  We teamed up with the Metalink team to get them extra horsepower to build out their new Phoenix API backend platform. We built:
                                  <ul>
                                    <li>* Periodic crawls of the blockchain to confirm NFT ownership</li>
                                    <li>* Calculated portfolio value for NFT holders</li>
                                    <li>* Built a highly scalable live chat system using Phoenix channels</li>
                                    <li>* Used a port of a Rust library to authenticate Metamask wallets</li>
                                    <li>* Did a live re-launch from their .NET v1 system to a ravenous set of 15,000 users</li>
                                  </ul>


                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  Technologies: VueJs - Phoenix - Elixir
                                  <br>
                                  Engagement: Team Augmentation
                                  <br>
                                  Website: <a href="www.metalink.com" target="_blank">metalink.com</a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="relative mx-auto px-6 py-8 max-w-7xl">
                            <div class="flex flex-col gap-8 ">
                              <h2 class="sm:text-3xl font-black text-charcoal">ZenCase</h2>
                              <div class="object-cover">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/wtIeuJwro6g?start=17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                              </div>
                              <div class="flex flex-col gap-6">
                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  We took their legal practice management from an in-house built system and transformed it into a fully-featured competitive SaaS product.
                                  <ul>
                                    <li>* Build a fully-featured Quickbooks integration that has processed tens of millions in invoices and payments</li>
                                    <li>* Created a serverless function that painlessly generates legal documents on the fly</li>
                                    <li>* Sped up legal delivery times massively through automatic document generation.</li>
                                    <li>* Interviewed and Hired 7 software engineers</li>
                                    <li>* They doubled their revenue</li>
                                    <li>* We use zencase to this day to maintain the back-office for Or Equals</li>
                                  </ul>
                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  Technologies: EmberJS - Ruby on Rails
                                  <br>
                                  Engagement: Custom Software Build | Quickbooks Integration | Document Automation
                                  <br>
                                  Website: <a href="www.zencase.com" target="_blank">zencase.com</a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="relative mx-auto px-6 py-8 max-w-7xl">
                            <div class="flex flex-col gap-8 ">
                              <h2 class="sm:text-3xl font-black text-charcoal">Letter Legal Separator</h2>
                              <div class="object-cover">
                                <iframe width="477" height="848" src="https://www.youtube.com/embed/G3zZ5Ods1cQ" title="Letter Legal Separator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                              </div>
                              <div class="flex flex-col gap-6">
                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  We took their legal practice management from an in-house built system and transformed it into a fully-featured competitive SaaS product.
                                  <ul>
                                    <li>* Separates two PDF documents by page size</li>
                                    <li>* Built in 1 weekend</li>
                                    <li>* Dynamically calcultes a stacking guide so that users can re-stack their paper </li>
                                    <li>* After the build, we got a pleasant email from a notary that found the app very useful!</li>
                                  </ul>
                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  Technologies: Ruby on Rails - StimulusJS
                                  <br>
                                  Engagement: Custom Software Build
                                  <br>
                                  Website: <a href="https://letter-legal-separator.orequals.com/" target="_blank">letter-legal-separator.orequals.com</a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="relative mx-auto px-6 py-8 max-w-7xl">
                            <div class="flex flex-col gap-8 ">
                              <h2 class="sm:text-3xl font-black text-charcoal">Ouroboros Discord Bot</h2>
                              <div class="object-cover">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ci65sUwDN1c" title="Ouroboros Discord Bot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                              </div>
                              <div class="flex flex-col gap-6">
                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  We built a heavy-duty Discord moderation bot that can scale to hundreds of discord servers and hundreds of thousands of users.
                                  <ul>
                                    <li>* Compiles server stats</li>
                                    <li>* Total Modmail system so that users can discreetly request and coordinate moderation.</li>
                                    <li>* Built with scale in mind. Can handle immense server load and message volume.</li>
                                  </ul>
                                <p class="sm:text-xl font-thin text-charcoal leading-loose">
                                  Technologies: Elixir - Discord API
                                  <br>
                                  Engagement: Custom Discord Bot
                                  <br>
                                  Website: <a href="https://letter-legal-separator.orequals.com/" target="_blank">letter-legal-separator.orequals.com</a>
                                </p>
                              </div>
                            </div>
                          </div>
                  </div>

                  <div class="w-100">
                    <!-- Body -->
                    <div class="card-body">
                      <blockquote class="blockquote text-center mb-0">

                        <!-- Brand -->
                        <div class="row justify-content-center mb-5 mb-md-7">
                          <div class="col-6 col-sm-4 col-md-7 col-lg-5">

                            <!-- Logo -->
                            <div class="img-fluid svg-shim" style="color: #FF5A5F;">
                              <a href='https://www.youtube.com/watch?v=PNht4lo_UGc' target='_blank'>
                                <img src="/img/patient-pilot.png" alt="Patient Pilot" class="img-fluid">
                              </a>
                            </div>

                          </div>
                        </div> <!-- / .row -->

                        <iframe width="560" height="315" title="Tech Beach Hackathon" src="https://www.youtube.com/embed/rSHt7991OgE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="560" height="315" title="Patient Pilot Pitch" src="https://www.youtube.com/embed/PNht4lo_UGc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <!-- Text -->
                        <p class="mb-5 mb-md-7">
                        Collaborating with Jitesh Doshi of <a href='http://www.spinspire.com' target="_blank">Spinspire</a> and Dr. Arnold Silverberg, we built Patient Pilot in 24 hours.
                        </p>

                        <p class="mb-5 mb-md-7">
                        It's a Progressive Web App (you can download it on your phone) that helps streamline the process of surgeons educating their patients on elective surgeries.
                        This was a big event put on by the city of Palm Coast, Florida.
                        </p>

                        <p class="mb-5 mb-md-7">
                        We took 2nd place and contributed to creating a better world!

                        Check out the <a href="https://flaglerlive.com/149270/tech-beach-hackathon/" target="_blank">article from Flagler Live</a>.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div class="w-100">
                    <!-- Body -->
                    <div class="card-body">
                      <blockquote class="blockquote text-center mb-0">

                        <!-- Brand -->
                        <div class="row justify-content-center mb-5 mb-md-7">
                          <div class="col-6 col-sm-4 col-md-7 col-lg-5">

                            <!-- Logo -->
                            <div class="img-fluid svg-shim">
                              <h2>
                                Letter Legal Page Separator
                              </h2>
                            </div>

                          </div>
                        </div> <!-- / .row -->

                        <iframe width="560" height="315" title="Letter Legal Page Separator" src="https://www.youtube.com/embed/8t0OapwhdFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <!-- Text -->
                        <p class="mb-5 mb-md-7">
                          We made an app over one weekend that separates letter and legal paper, in case you find yourself with a combo document. This app separates them into separate PDFs!
                        </p>

                        <p class="mb-5 mb-md-7">
                        After the build, we got a pleasant email from a notary that found the app very useful!
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div> <!-- / .row -->

                <div class="w-100">
                  <!-- Body -->
                  <div class="card-body">
                    <blockquote class="blockquote text-center mb-0">

                      <!-- Brand -->
                      <div class="row justify-content-center mb-5 mb-md-7">
                        <div class="col-6 col-sm-4 col-md-7 col-lg-5">

                          <!-- Logo -->
                          <div class="img-fluid svg-shim">
                            <h2>
                              ACE Dispatch - Dispatching Software for Truckers
                            </h2>
                          </div>

                        </div>
                      </div> <!-- / .row -->

                      <iframe width="560" height="315" title="Letter Legal Page Separator" src="https://www.youtube.com/embed/RWSwvwsqvx0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                      <!-- Text -->
                      <p class="mb-5 mb-md-7">
                      We built this dispatching software for a trucking company that completely transformed the dispatching story.
                      Dispatching staff could quickly update routes company-wide. Truckers could easily get the updates.
                      </p>

                      <p class="mb-5 mb-md-7">
                      We also built an integration with the truckers' handheld devices, so that they could mark deliveries on the fly.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div> <!-- / .row -->

            </div>
          </div>
        </div> <!-- / .row -->
      </div> <!-- / .container -->
    </div>
  </div>
</section>

<!-- SHAPE
================================================== -->
<div class="position-relative mt-n8">
  <div class="shape shape-bottom shape-fluid-x svg-shim text-black">
    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"/></svg>
  </div>
</div>

<!-- STATS
================================================== -->
<section class="pt-12 pt-md-13 bg-black">
  <div class="container">
    <div class="row justify-content-between align-items-center mb-5" id='about'>
      <div class="col-12 order-md-1">

        <img class="img-fluid w-75 w-md-100 mb-6 mb-md-0" src="img/patient_pilot_award.png" alt="Patient Pilot" style="max-width: 450px;">

        <!-- Heading -->
        <h2 class="text-white">
          A software development shop obsessed with delivering real-world business value.
        </h2>

        <!-- Text -->
        <div class="lead text-muted-80 mb-0">

          In October 2019, Joshua Plicque left a Software Engineering Lead position to pursue his personal passion of day trading in the stock market.
          Along the way, in January 2020, he found his phone chirping with opportunities to solve three companies' business problems through software. With this much opportunity, Or Equals was born.
          <br>
          <br>

          Joshua's career began under the tutelage of the world-class developers of Hashrocket, a lauded Ruby-on-Rails shop. After apprenticing there for a year, he honed his skills for 4 years
          at ZenCase, a legal practice management startup. When things started taking off at the startup, he fielded a rockstar team of EmberJS and Rails developers.

          <br>
          <br>
          He founded Or Equals on the 3 core principles of: radical honesty, software excellence through craftmanship, and continuous improvement.
          His software experience spans the fashion, trucking, travel, workplace productivity, and insurance industries. Due to these varied experiences, he brings a dynamic and well-rounded approach, founded upon delivering business value.

          <a href="https://www.visualcv.com/joshua-plicque/" target="_blank">
            View his work experience here.
          </a>
        </div>

      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-12">
        <!-- Image -->
        <img src="/img/illustrations/illustration-8.png" alt="..." class="img-fluid mb-6 mb-md-0">
      </div>
    </div> <!-- / .row -->
  </div> <!-- / .container -->
</section>

<section class="pt-9 pt-md-12 bg-black">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 text-center">

        <!-- Heading -->
        <h1 class="text-white">
          Make software work for you.
        </h1>

        <!-- Text -->
        <p class="lead text-white">
        We have a proven track record of cutting business costs, improving productivity, and increasing happiness.
        </p>

        <button class="btn btn-block btn-primary btn-lg mb-10 lift ml-auto" on:click={triggerCalendly}>
          Get in touch
        </button>
      </div>
    </div> <!-- / .row -->
  </div>
</section>

<style>
  .mh-40 {
    max-height: 40px;
  }

  a.navbar-btn:visited, .btn-block, .text-md-left a {
    color: white;
  }
  .mw-lg-100 {
    max-width: 100%!important;
  }

  iframe {
    max-width: 100%;
  }

  .navbar-toggler-icon {
    display: none;
  }
</style>
