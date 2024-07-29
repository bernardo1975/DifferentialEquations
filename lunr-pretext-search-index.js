var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This text is intended for a one-semester undergraduate course in ordinary differential equations.  There are additional exercises and computer projects throughout the lecture notes. The computer projects often require a basic knowledge of Python\/SageMath and GeoGebra. All of these exercises and projects are more substantial in nature and allow the exploration of new results and theory.  SageMath ( ) is a free, open source, software system for advanced mathematics, which is ideal for assisting with a study of ordinary differential equations. SageMath can be used either on your own computer, a local server, or on CoCalc ( ). The SageMath code in this document has been tested for accuracy with the most recent version available at this time: Sage Version 10.3 (released 2024 03 19).  TODO GeoGebra  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "    copyright  "
},
{
  "id": "sec-firstlook-exponential-growth",
  "level": "1",
  "url": "sec-firstlook-exponential-growth.html",
  "type": "Section",
  "number": "1.1",
  "title": "Exponential Growth",
  "body": " Exponential Growth  We begin our study of ordinary differential equations by modeling some real world phenomena. For a particular situation that we might wish to investigate, our first task is to write an equation (or equations) that best describes the phenomenon. Suppose that we wish to study how a population grows with time . We might make the assumption that a constant fraction of population is having offspring at any particular time. If we also assume that the population has a constant death rate, the change in the population during a small time interval will be where is the fraction of the population having offspring during the interval and is the fraction of the population that dies during the interval. Equivalently, we can write where . Since the derivative of is the rate of change of the population is proportional to the size of the population, or  The equation is one of the simplest differential equations that we will consider. The equation tells us that the population grows in proportion to its current size. It is not too difficult to see that is a solution to this equation, where is an arbitrary constant. Indeed, if we differentiate , we obtain In addition, if we know the value of , say when , we can also determine the value of . For example, if the population at the time is , then or . The differential equation is an example of an initial value problem  initial value problem  IVP initial value problem , and we say that is an initial condition initial condition . Since the solution to equation is , and we say that the population grows exponentially exponential growth .   Exponential growth of bacteria  As an example, suppose that is a population of a colony of bacteria at time , whose initial population is 1000 at , where time is measured in hours. Then and our solution becomes . If the population grows at three percent per hour, then after one hour. Consequently, and the solution to our initial value problem is Of course, it is important to realize that this is only a model. If is small, our model might be reasonably accurate. However, if we let be very large, our colony of bacteria could very well exceed the mass of the earth.   The growth rate of a population need not be positive. For example, Japan has experienced negative growth in recent years. See . The equation can also be used to model such phenomena such as radioactive decay and compound interest topics which we will explore later.  To summarize, we say that the expression is a general solution  solution general of the equation , and is a particular solution  solution particular to the differential equation. The general solution to our equation graphs as an infinite family of curves, which we will call integral curves  integral curves or solution curves solution curves ( ).      Integral curves   "
},
{
  "id": "sec-firstlook-exponential-growth-3",
  "level": "2",
  "url": "sec-firstlook-exponential-growth.html#sec-firstlook-exponential-growth-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution initial value problem initial condition exponentially "
},
{
  "id": "example-exponential-growth",
  "level": "2",
  "url": "sec-firstlook-exponential-growth.html#example-exponential-growth",
  "type": "Example",
  "number": "1.1.1",
  "title": "Exponential growth of bacteria.",
  "body": " Exponential growth of bacteria  As an example, suppose that is a population of a colony of bacteria at time , whose initial population is 1000 at , where time is measured in hours. Then and our solution becomes . If the population grows at three percent per hour, then after one hour. Consequently, and the solution to our initial value problem is Of course, it is important to realize that this is only a model. If is small, our model might be reasonably accurate. However, if we let be very large, our colony of bacteria could very well exceed the mass of the earth.  "
},
{
  "id": "sec-firstlook-exponential-growth-6",
  "level": "2",
  "url": "sec-firstlook-exponential-growth.html#sec-firstlook-exponential-growth-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution particular solution integral curves solution curves "
},
{
  "id": "figure-firstlook-integral-curves",
  "level": "2",
  "url": "sec-firstlook-exponential-growth.html#figure-firstlook-integral-curves",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "    Integral curves  "
},
{
  "id": "sec-firstlook-logistic-growth",
  "level": "1",
  "url": "sec-firstlook-logistic-growth.html",
  "type": "Section",
  "number": "1.2",
  "title": "Logistic Growth",
  "body": " Logistic Growth  Not all populations grow exponentially; otherwise, a bacteria culture in a petri dish would grow unbounded and soon be much larger than the size of the laboratory. To see what happens if there are limiting factors to population growth, let us consider the population of fish in a children's trout pond. The number of trout will be limited by the available resources, food supply, and spawning habitat. A small population of fish might grow exponentially if the pond is large and food is abundant, but the growth rate will decline as the population increases and the availability of resources declines. We can use the logistic equation logistic equation to model population growth in a resource limited environment The logistic model was first used by the Belgian mathematician and physician Pierre François Verhulst in 1836 to predict the populations of Belgium and France. .  To see how the logistic model works, let us try to adjust our model of exponential growth to account for the limited resources of the pond. We will make the following assumptions.  If the population of trout is small and the pond is large with abundant resources, the rate of growth will be approximately exponential,  If is the maximum population of trout that the pond can support, then any population larger than will decrease. In other words, for . We say that is the carrying capacity carrying capacity for the population.  Our assumptions suggest that we might try an equation of the form where is a function of that is close to 1 if the population is small, but negative if the population is greater than . The simplest function satisfying these conditions is Thus, the logistic population model is given by the differential equation   Logistic growth of fish  Suppose we have a pond will support 1000 fish, and the initial population is 100 fish. In order to determine the number of fish in the lake at any time , we must solve the initial value problem It is easy to verify that is the solution to our initial value problem We will learn how to solve initial-value problems such as the one described here in Section . For the time being, we will be satisfied with being able to verify the fact that we have a solution. .  If we differentiate , we will obtain the righthand side of the differential equation, and certainly . In addition, if we know that the population is 200 fish after one year, then and we can determine that Consequently, the solution to our intial-value problem is The graph of our solution certainly fits the situation that we are modeling ( ).  Of course, we have not allowed for the possibility that children will be catching fish in our pond. We will examine how fishing affects our model in Section .       Logistic growth   "
},
{
  "id": "sec-firstlook-logistic-growth-2",
  "level": "2",
  "url": "sec-firstlook-logistic-growth.html#sec-firstlook-logistic-growth-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic equation "
},
{
  "id": "sec-firstlook-logistic-growth-3",
  "level": "2",
  "url": "sec-firstlook-logistic-growth.html#sec-firstlook-logistic-growth-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "carrying capacity logistic population model "
},
{
  "id": "example-firstlook-logistic-growth",
  "level": "2",
  "url": "sec-firstlook-logistic-growth.html#example-firstlook-logistic-growth",
  "type": "Example",
  "number": "1.2.1",
  "title": "Logistic growth of fish.",
  "body": " Logistic growth of fish  Suppose we have a pond will support 1000 fish, and the initial population is 100 fish. In order to determine the number of fish in the lake at any time , we must solve the initial value problem It is easy to verify that is the solution to our initial value problem We will learn how to solve initial-value problems such as the one described here in Section . For the time being, we will be satisfied with being able to verify the fact that we have a solution. .  If we differentiate , we will obtain the righthand side of the differential equation, and certainly . In addition, if we know that the population is 200 fish after one year, then and we can determine that Consequently, the solution to our intial-value problem is The graph of our solution certainly fits the situation that we are modeling ( ).  Of course, we have not allowed for the possibility that children will be catching fish in our pond. We will examine how fishing affects our model in Section .  "
},
{
  "id": "figure-firstlook-logistic-growth",
  "level": "2",
  "url": "sec-firstlook-logistic-growth.html#figure-firstlook-logistic-growth",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": "    Logistic growth  "
},
{
  "id": "sec-firstlook-spring-mass",
  "level": "1",
  "url": "sec-firstlook-spring-mass.html",
  "type": "Section",
  "number": "1.3",
  "title": "A Spring-Mass Model",
  "body": " A Spring-Mass Model  Sometimes it is necessary to consider the second derivative when constructing a mathematical model. Suppose that we have a mass lying on a flat, frictionless surface and that this mass is attached to one end of a spring with the other end of the spring attached to a wall. We denote the spring displacement by . If , then the spring is stretched. If , the spring is compressed. If , then the spring is in a state of equilibrium ( ). If we pull on the mass, then the mass will oscillate back and forth across the table.       A spring-mass system   We can construct a differential equation that models our oscillating mass. First, we must consider the restorative force on the spring. We will make the assumption that this force depends on the displacement of the spring, . Using Taylor's Theorem from calculus, we can expand to obtain where and . If the displacement is not too large, then will be small for , and we can ignore higher ordered terms. Thus, we can consider the restorative force on the spring to be proportional to displacement of the spring from its equilibrium length, This equation is known as is Hooke's law  Hooke's law . We can test this law experimentally, and it is reasonably accurate if the displacement of the spring, , is not too large.  By Newton's second law of motion, the force on the mass must be Setting the two forces equal, we have a second order differential equation, which describes our oscillating mass. The spring-mass system is an example of a harmonic oscillator harmonic oscillator .  Suppose that we have a spring-mass system where and . If the initial velocity of the spring is one unit per second and the initial position is at the equilibrium point, then we have the following initial value problem, Since for both the sine and cosine functions, we might guess that a general solution of our differential equation has the form Noting that and using our initial conditions, we can determine that and or The graph of the position of the mass as a function of time is given in .      A undamped spring-mass system   Now let us add a damping force to our system. For example, we might add a dashpot, a mechanical device that resists motion, to our system. Think of a dashpot as that small cylinder that keeps your screen door from slamming shut. The simplest assumption would be to take the damping force of the dashpot to be proportional to the velocity of the mass, . Thus, we have will have an additional force, acting on our mass, where . Our new equation for the spring-mass system is or where , , and are all positive constants. If we let , , and , then we would have an spring-mass system governed by the equation We will learn how to solve equations of the form in , but let us assume that the solution is of the form for now. Then Since is never zero, it must be the case that or , if is to be a solution to our equation. Thus, we might guess that is a general solution to our equation. If the initial velocity of our mass is one unit per second and the initial position is zero, then we have the initial value problem Using the fact that , our initial conditions give us the following system of linear equations, Thus, and , and our spring-mass system is modeled by the function Notice that the additional damping negates any oscillation in the system. In this case, we say that the system is over-damped harmonic oscillator over-damped ( ).      An over-damped spring-mass system   Of course, if we have a very strong spring and only add a small amount of damping to our spring-mass system, the mass would continue to oscillate, but the oscillations would become progressively smaller. In other words, our system would be under-damped  harmonic oscillator under-damped . For example, our spring-mass system might be described by the initial value problem It is easy to verify that is a solution to the initial value problem ( ).      An under-damped spring-mass system   We will explore harmonic oscillators and second-order differential equations more fully in .  "
},
{
  "id": "figure-firstlook-spring-mass",
  "level": "2",
  "url": "sec-firstlook-spring-mass.html#figure-firstlook-spring-mass",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "     A spring-mass system  "
},
{
  "id": "sec-firstlook-spring-mass-4",
  "level": "2",
  "url": "sec-firstlook-spring-mass.html#sec-firstlook-spring-mass-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hooke's law "
},
{
  "id": "sec-firstlook-spring-mass-5",
  "level": "2",
  "url": "sec-firstlook-spring-mass.html#sec-firstlook-spring-mass-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second order harmonic oscillator "
},
{
  "id": "figure-firstlook-position-mass",
  "level": "2",
  "url": "sec-firstlook-spring-mass.html#figure-firstlook-position-mass",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": "    A undamped spring-mass system  "
},
{
  "id": "sec-firstlook-spring-mass-8",
  "level": "2",
  "url": "sec-firstlook-spring-mass.html#sec-firstlook-spring-mass-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "over-damped "
},
{
  "id": "figure-firstlook-over-damped",
  "level": "2",
  "url": "sec-firstlook-spring-mass.html#figure-firstlook-over-damped",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": "    An over-damped spring-mass system  "
},
{
  "id": "sec-firstlook-spring-mass-10",
  "level": "2",
  "url": "sec-firstlook-spring-mass.html#sec-firstlook-spring-mass-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "under-damped "
},
{
  "id": "figure-firstlook-under-damped",
  "level": "2",
  "url": "sec-firstlook-spring-mass.html#figure-firstlook-under-damped",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": "    An under-damped spring-mass system  "
},
{
  "id": "sec-firstlook-predator-prey",
  "level": "1",
  "url": "sec-firstlook-predator-prey.html",
  "type": "Section",
  "number": "1.4",
  "title": "A Predator-Prey System",
  "body": " A Predator-Prey System  Some situations require more than one differential equation to model a particular situation. We might use a system of differential equations to model two interacting species, say where one species preys on the other The predator-prey model was discovered independently by Lotka (1925) and Volterra (1926). . For example, we can model how the population of Canadian lynx ( lynx canadienis ) interacts with a the population of snowshoe hare ( lepus americanis ) (see ).  We have good historical data for the populations of the lynx and snowshoe hare from the Hudson Bay Company. This large Canadian retail company, which owns and operates a large number of retail stores in North America and Europe, including Galeria Kaufhof, Hudson's Bay, Home Outfitters, Lord & Taylor, and Saks Fifth Avenue, was originally founded in 1670 as a fur trading company. The Hudson Bay Company kept accurate records on the number of lynx pelts that were bought from trappers from 1821 to 1940. The company noticed that the number of pelts varied from year to year and that the number of lynx pelts reached a peak about every ten years . The ten year cycle for lynx can be best understood using a system of differential equations.  The primary prey for the Canadian lynx is the snowshoe hare. We will denote the population of hares by and the population of lynx by , where is the time measured in years. We will make the following assumptions for our predator-prey model.  If no lynx are present, we will assume that the hares reproduce at a rate proportional to their population and are not affected by overcrowding. That is, the hare population will grow exponentially,  Since the lynx prey on the hares, we can argue that the rate at which the hares are consumed by the lynx is proportional to the rate at which the hares and lynx interact. Thus, the equation that predicts the rate of change of the hare population becomes We are thinking of as the number of possible interactions between the lynx and the hare populations.  If there is no food, the lynx population will decline at a rate proportional to itself,  The lynx receive benefit from the hare population. The rate at which lynx are born is proportional to the number of hares that are eaten, and this is proportional to the rate at which the hares and lynx interact. Consequently, the growth rate of the lynx population can be described by  We now have a system of differential equations that describe how the two populations interact, We will learn how to analyze and solve systems of differential equations in subsequent chapters; however, we will give a graphical solution in to the system Notice that the predator population, , begins to grow and reaches a peak after the prey population, reaches its peak. As the prey population declines, the predator population also declines. Once the predator population is smaller, the prey population has a chance to recover that the cycle begins again An excellent account of the actual lynx and snowshoe hare data and model can be found in . .      The predator-prey relationship between the lynx and the snowshoe hare   "
},
{
  "id": "sec-firstlook-predator-prey-4",
  "level": "2",
  "url": "sec-firstlook-predator-prey.html#sec-firstlook-predator-prey-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system "
},
{
  "id": "figure-firstlook-lynx-snowshoe-hare",
  "level": "2",
  "url": "sec-firstlook-predator-prey.html#figure-firstlook-lynx-snowshoe-hare",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": "    The predator-prey relationship between the lynx and the snowshoe hare  "
},
{
  "id": "sec-firstlook-SIR",
  "level": "1",
  "url": "sec-firstlook-SIR.html",
  "type": "Section",
  "number": "1.5",
  "title": "Childhood Diseases: The SIR-model",
  "body": " Childhood Diseases: The SIR-model  Differential equations are used to model diseases. Most childhood diseases, such as measels, can be represented diagrammatically by Here, we assume that the population consists of susceptibles ( , i.e., persons who are healthy but can acquire the disease), infected ( ) and removed ( , either by acquired immunity, isolation or death) persons. Individuals are born susceptible, then may acquire the infection and finally recover. As mathematical model, one thinks of three compartments , labelled S, I and R, and individuals are tranferred between these compartments according to the diagram above This model was for the first time proposed by the Scottish biochemist William Ogilvy Kermack and the Scottish military physician and epidemiologist Anderson Gray McKendrick as a special case of what we now call Kermack-McKendrick theory, and followed work McKendrick had done with the British medical doctor Ronald Ross; A. G. McKendrick and W. O. Kermack published their theory in a set of three articles from 1927, 1932, and 1933. . Since susceptible persons become sick when they have contact with infected persons, but recover after a certain time span, a simple model for such an SIR-disease using a system of differential equations is: The parameter is called the pairwise infectious contact rate and gives the rate of infection when a susceptible meets an infected person. The parameter is the rate of recovery .  Analysing this system of differential equation, one finds: If the fraction of susceptibles is low enough, the fraction of infected persons will decline and the disease will die out. However, if the fraction of susceptibles is higher than a certain threshold, the number of infected people increases: an epidemic occurs. During an epidemic, the number of susceptible individuals falls rapidly as more of them are infected. Afterwards the disease cannot break out again until the number of susceptibles has built back up as a result of newborns.  Here, vaccines come into play: A vaccine reduces the number of susceptibles by immunization, thus if the enough people are vaccinated an epidemic will not break out and the disease will eventually die out. Smallpox was the first (and until recently only Smallpox was officially declared eradiacted in 1979. Rinderpest was unofficially declared eradicated in 2010. For an update of the current status for other diseases (e.g., polio), have a look at . ) disease that was successfully eradicated by this method mainly because the fraction of susceptibles that need to be successfully vaccinated is lower than in other diseases like measels, mumps, diphtheria etc.  In the Spanish invasion of South America, the Aztecs were devasted by a smallpox epidemic introduced by one of Cortez' men. In the figure below we used the above system of differential equations to model this situation: The disease was introduced to a wholly susceptible population (blue), the epidemic broke out reaching its high point after approximately three years (the infected are colored in red). Eventually, around suffered from the disease (smallpox is a very deadly disease).      Susceptibles, infected and recovered over time (as fraction of the total population) as predicted by the SIR-model during an epidemic.   "
},
{
  "id": "figure-firstlook-SIR",
  "level": "2",
  "url": "sec-firstlook-SIR.html#figure-firstlook-SIR",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": "    Susceptibles, infected and recovered over time (as fraction of the total population) as predicted by the SIR-model during an epidemic.  "
},
{
  "id": "sec-firstlook-covid19",
  "level": "1",
  "url": "sec-firstlook-covid19.html",
  "type": "Section",
  "number": "1.6",
  "title": "Modeling COVID-19",
  "body": " Modeling COVID-19  TODO  "
},
{
  "id": "sec-firstlook-modeling-HIV",
  "level": "1",
  "url": "sec-firstlook-modeling-HIV.html",
  "type": "Section",
  "number": "1.7",
  "title": "Modeling the HIV-1 Virus",
  "body": " Modeling the HIV-1 Virus   The interaction of the HIV-1 virus with the body's immune system can be modeled by a system of differential equations similar to a predator-prey system. After an individual is infected with the HIV-1 virus, the amount of the virus in the bloodstream rises dramatically and the person will often suffer from flu-like symptoms. However, these symptoms will disappear after a period of weeks or months as the body begins to manufacture antibodies against the virus. Tests have been developed to determine the presence of HIV-1 antibodies. If an individual has such antibodies, then they are said to be HIV-1 positive. Once infected with the HIV-1 virus, it can be years before an HIV-positive patient exhibits the full symptoms of AIDS. The body's immune system fights the HIV-1 virus with white blood cells. The CD4-positive T-helper cells, a specific type of white blood cell, is especially important since it helps other cells fight the virus. However, the HIV-1 virus can destroy CD4-positive T-helper cells.  We can develop a system of differential equations to better understand the dynamics of the HIV-1 virus . Let be the population of the HIV-1 virus at time . We will assume that the virus concentration is governed by the following differential equation, The first term, is some function of that determines the rate at which new viral particles are created. The term is the death rate for the virions. If someone discovers a drug that blocks the creation of new HIV-1 virions, then would be zero and the virions would clear the body at the following rate, and , where is the initial viral population.  Now let us consider a model for the concentration of of (uninfected) CD4-positive T-helper cells, The constant represents the rate at which T cells are created from sources in the body, such as the thymus. New CD4-positive T-helper cells can also be created from the proliferation of existing CD4-positive T-helper cells, and the second term in the equation represents the logistic growth of the T cells, where is the maximum proliferation rate and is the T cell population density where proliferation ceases. Finally, is the death rate of the T cells.  Like the influenza virus, the HIV-1 virus is an RNA virus. An RNA virus cannot reproduce on its own and must use the DNA from a host cell. To do this, the virus attaches itself to a CD4-positive T-helper cell and injects its RNA into the cell. This way the virus can use the T cell's DNA to replicate itself using a process called reverse transcription, where a DNA copy of the virus's RNA is made. New virus particles are created, and the T cell eventually bursts releasing the virions into the body. If we let be the concentration of infected T cells, we can model this process with the following system of equations, where is the rate of loss of the virus producing T cells and is the number of virions produced per infected T cell during its lifetime. The term tells us the rate at which the HIV-1 virus infects T cells. This is the same idea as modeling how predators interact with prey in a predator-prey model. Thus, our complete model becomes  One class of drugs that HIV infected patients receive are reverse transcriptase (RT) inhibitors. RT inhibitors block the action of reverse transcription and prevent the virus from duplicating. If one could find the perfect RT inhibitor, then and our system becomes Unfortunately, no one has discovered a perfect RT inhibitor, so we will need to modify the system to account for the effectiveness of the RT inhibitor. We can accomplish this by adding an effectiveness factor, , to the term. Our system now becomes If , then the RT inhibitor is completely effective. On the other hand, if , then the RT inhibitor is completely ineffective. We now have a model for how the HIV-1 virus interacts we the immune system. Researchers can use data to estimate the parameters and see exactly what types of solutions are possible.  "
},
{
  "id": "sec-firstlook-sage",
  "level": "1",
  "url": "sec-firstlook-sage.html",
  "type": "Section",
  "number": "1.8",
  "title": "SageMath — Open Source Software",
  "body": " SageMath Open Source Software  Technology can prove very useful when studying differential equations. Software packages such Maple, Mathematica, and Matlab each have their advantages and disadvantages. We will use SageMath , a readily available open source computer algebra system, as our choice of software. SageMath can be run on an individual computer or over the internet on a server or is available inside CoCalc at . You can even access SageMath from your smart phone. For our purposes, SageMath cells are embedded into the textbook, so there is nothing to install on your computer. Simply, evaluate the cell. You can even change the preloaded commands in the cell if you wish. For example, let us evaluate the derivative of .   We can use SageMath to plot functions. For example, we can plot the function as well as its derivative on the same graph.   We can use SageMath to solve differential equations. Suppose that we wish to solve the initial value problem We can use the following commands.   We will provide abundant examples of how to use SageMath to solve and analyze differential equations throughout the book, and we encourage the reader to experiment by altering the SageMath commands inside the individual Sage cells. If you make a mistake, you can simply reload the webpage and start again.  The reader will find plenty of resources to learn how to use SageMath . A good place to start is or . Although we will be using SageMath as the technology of choice, this book can be read independently of SageMath . Finally, we would like to emphasize once again that the reader who chooses not to use some sort of technology will be at a disadvantage.  "
},
{
  "id": "sec-firstlook-questions-for-thought",
  "level": "1",
  "url": "sec-firstlook-questions-for-thought.html",
  "type": "Section",
  "number": "1.9",
  "title": "Some Questions for Thought",
  "body": " Some Questions for Thought  In this section we have provided a general notion of what a differential equation is as well as several modeling situations where differential equations are useful; however, we have left many questions unanswered.  First, we need a more rigorous definition of a differential equation; so, what is the proper way to define a system of differential equations?  Does a differential equation or a system of differential equations always have a solution?  Are solutions to differential equations unique?  If a unique solution to a differential equation exists, (how) can we find it?  If it is not possible to find a precise solution algebraically, can we estimate the solution numerically?  If neither is possible, can we still say anything useful about the solution?  Of course, other questions will come to mind as we continue our study of differential equations.  "
},
{
  "id": "sec-firstlook-important-lessons",
  "level": "1",
  "url": "sec-firstlook-important-lessons.html",
  "type": "Section",
  "number": "1.10",
  "title": "Important Lessons",
  "body": " Important Lessons   A differential equation is an equation relating a function to one or more of its derivatives.  An initial value problem is a differential equation where the initial condition , , is specified.  A population that is not affected by overcrowding can be modeled by the differential equation and is said to grow exponentially .  A population that must compete for limited resources can be modeled by the logistic equation , where is the carrying capacity of the population.  Some phenomenon, such as the relationship between a population of predators and a population of prey, are best modeled by systems of differential equations.  The three principle steps in modeling any phenomenon with differential equations are:  Discovering the differential equation or equations that best describe a specified physical situation.  Finding either exactly or approximately the appropriate solution of the equation or equations.  Interpreting the solution in terms of the phenomenon.    "
},
{
  "id": "sec-firstlook-important-lessons-2",
  "level": "2",
  "url": "sec-firstlook-important-lessons.html#sec-firstlook-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation initial value problem initial condition exponentially logistic equation "
},
{
  "id": "sec-firstlook-exercises",
  "level": "1",
  "url": "sec-firstlook-exercises.html",
  "type": "Section",
  "number": "1.11",
  "title": "Exercises",
  "body": " Exercises   Verify that is a solution to the differential equation      Verify that is a solution to the differential equation . Determine if .   We can determine that . Since , is a solution to the initial value problem.    Verify that is a solution to the initial value problem    Consider the differential equation .  Verify that is a solution to this equation.  Sketch solution curves for .  Verify that is a solution to the differential equation in part (a). Can you find a value for such that      Write a differential equation that models a population , where changes at a rate proportional to the square root of .      We can modify the logistic growth model to account for a threshold population. That is, if the population of a species drops below a certain level, the species is endanger of extinction. Consider the case of the black rhinoceros, once the most numerous of all rhinoceros species and now critically endangered. The black rhino, native to eastern and southern Africa, was estimated to have a population of about 100,000 around 1900. Because of hunting, habitat changes, competing species, and most of all illegal poaching, the number of black rhinos today is estimated to be below 3000. If the wild population becomes too low, the animals may not be able to find suitible mates and the black rhino will become extinct. There must be a minimum population for the species to continue. Suppose the this minimum or threshold population for the black rhino is 1000 animals and that remaining habitant in Africa will support no more that 20,000 rhinos.  For what values of is the rhino population increasing? What can be said about the value of for these values of ?  For what values of is the rhino population decreasing? What can be said about the value of for these values of ?  For what values of is the rhino population in equilibrium? What can be said about the value of for these values of ?  Find a differential equation that models the population of rhinos at time .    The population is increasing if and .    Given the equation , where is a constant and is a continuous function defined on an interval , show that is a solution of this equation, where is any constant and .   Rewriting the differential equation as and using the fact that we see that   Radiocarbon Dating  Carbon 14 is a radioactive isotope of carbon, the most common isotope of carbon being carbon 12. Carbon 14 is created when cosmic ray bombardment changes nitrogen 14 to carbon 14 in the upper atmosphere. The resulting carbon 14 combines with atmospheric oxygen to form radioactive carbon dioxide, which is incorporated into plants by photosynthesis. Animals acquire carbon 14 by eating plants. When an animal or plant dies, it ceases to take on carbon 14, and the amount of isotope in the organism begins to decay into the more common carbon 12. Carbon 14 has a very long half-life, about 5730 years. That is, given a sample of carbon 14, it will take 5730 years for half of the sample will decay to carbon 12. The long half-life is what makes carbon 14 dating is very useful in dating objects from antiquity.  Consider at sample of material that contains atoms of carbon 14 at time . During each unit of time a constant fraction of the radioactive atoms will spontaneously decay into another element or a different isotope of the same element. Thus, the sample behaves like a population with a constant death rate and a zero birth rate. Make use of the model of exponential growth to construct a differential equation that models radioactive decay for carbon 14.  Solve the equation that you proposed in (a) to find an explicit formula for .  The Chauvet-Pont-d'Arc Cave in the Ardèche department of southern France contains some of the best preserved cave paintings in the world. Carbon samples from torch marks and from the paintings themselves, as well as from animal bones and charcoal found on the cave floor, have been used to estimate the age of the cave paintings. If a particular sample taken from the Cauvet Cave contains 2% of the expected cabon 14, what is the approximate age of the sample?     Consider the following predator-prey systems of differential equations   Which equation models the prey population and which equation models the predator population?  How does the prey population grow if there are no predators present?  What happens if there are a lot of prey present?    Think about the limit of the interaction term as the number of prey becomes very large.   WeBWorK Example   If is a solution to the differential equation find the value of the constant and the general solution to this equation.      (Use constants A, B, etc., for any constants in your solution formula.)             . Since , we must have . Therefore . The characteristic equation is , so or 5. Therefore .      WeBWorK Example 2   Just as there are simultaneous algebraic equations (where a pair of numbers have to satisfy a pair of equations) there are systems of differential equations, (where a pair of functions have to satisfy a pair of differential equations).  Indicate which pairs of functions satisfy this system. It will take some time to make all of the calculations.                          As you can see, finding all of the solutions, particularly of a system of equations, can be complicated and time consuming. It helps greatly if we study the structure of the family of solutions to the equations. Then if we find a few solutions we will be able to predict the rest of the solutions using the structure of the family of solutions.       WeBWorK Example 3   Let .  Find all values of such that satisfies the differential equation. If there is more than one correct answer, enter your answers as a comma separated list.              "
},
{
  "id": "sec-firstlook-exercises-2",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-2",
  "type": "Checkpoint",
  "number": "1.11.1",
  "title": "",
  "body": " Verify that is a solution to the differential equation    "
},
{
  "id": "sec-firstlook-exercises-3",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-3",
  "type": "Checkpoint",
  "number": "1.11.2",
  "title": "",
  "body": " Verify that is a solution to the differential equation . Determine if .   We can determine that . Since , is a solution to the initial value problem.  "
},
{
  "id": "sec-firstlook-exercises-4",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-4",
  "type": "Checkpoint",
  "number": "1.11.3",
  "title": "",
  "body": " Verify that is a solution to the initial value problem  "
},
{
  "id": "sec-firstlook-exercises-5",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-5",
  "type": "Checkpoint",
  "number": "1.11.4",
  "title": "",
  "body": " Consider the differential equation .  Verify that is a solution to this equation.  Sketch solution curves for .  Verify that is a solution to the differential equation in part (a). Can you find a value for such that    "
},
{
  "id": "sec-firstlook-exercises-6",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-6",
  "type": "Checkpoint",
  "number": "1.11.5",
  "title": "",
  "body": " Write a differential equation that models a population , where changes at a rate proportional to the square root of .    "
},
{
  "id": "sec-firstlook-exercises-7",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-7",
  "type": "Checkpoint",
  "number": "1.11.6",
  "title": "",
  "body": " We can modify the logistic growth model to account for a threshold population. That is, if the population of a species drops below a certain level, the species is endanger of extinction. Consider the case of the black rhinoceros, once the most numerous of all rhinoceros species and now critically endangered. The black rhino, native to eastern and southern Africa, was estimated to have a population of about 100,000 around 1900. Because of hunting, habitat changes, competing species, and most of all illegal poaching, the number of black rhinos today is estimated to be below 3000. If the wild population becomes too low, the animals may not be able to find suitible mates and the black rhino will become extinct. There must be a minimum population for the species to continue. Suppose the this minimum or threshold population for the black rhino is 1000 animals and that remaining habitant in Africa will support no more that 20,000 rhinos.  For what values of is the rhino population increasing? What can be said about the value of for these values of ?  For what values of is the rhino population decreasing? What can be said about the value of for these values of ?  For what values of is the rhino population in equilibrium? What can be said about the value of for these values of ?  Find a differential equation that models the population of rhinos at time .    The population is increasing if and .  "
},
{
  "id": "sec-firstlook-exercises-8",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-8",
  "type": "Checkpoint",
  "number": "1.11.7",
  "title": "",
  "body": " Given the equation , where is a constant and is a continuous function defined on an interval , show that is a solution of this equation, where is any constant and .   Rewriting the differential equation as and using the fact that we see that  "
},
{
  "id": "sec-firstlook-exercises-9",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-9",
  "type": "Checkpoint",
  "number": "1.11.8",
  "title": "Radiocarbon Dating.",
  "body": "Radiocarbon Dating  Carbon 14 is a radioactive isotope of carbon, the most common isotope of carbon being carbon 12. Carbon 14 is created when cosmic ray bombardment changes nitrogen 14 to carbon 14 in the upper atmosphere. The resulting carbon 14 combines with atmospheric oxygen to form radioactive carbon dioxide, which is incorporated into plants by photosynthesis. Animals acquire carbon 14 by eating plants. When an animal or plant dies, it ceases to take on carbon 14, and the amount of isotope in the organism begins to decay into the more common carbon 12. Carbon 14 has a very long half-life, about 5730 years. That is, given a sample of carbon 14, it will take 5730 years for half of the sample will decay to carbon 12. The long half-life is what makes carbon 14 dating is very useful in dating objects from antiquity.  Consider at sample of material that contains atoms of carbon 14 at time . During each unit of time a constant fraction of the radioactive atoms will spontaneously decay into another element or a different isotope of the same element. Thus, the sample behaves like a population with a constant death rate and a zero birth rate. Make use of the model of exponential growth to construct a differential equation that models radioactive decay for carbon 14.  Solve the equation that you proposed in (a) to find an explicit formula for .  The Chauvet-Pont-d'Arc Cave in the Ardèche department of southern France contains some of the best preserved cave paintings in the world. Carbon samples from torch marks and from the paintings themselves, as well as from animal bones and charcoal found on the cave floor, have been used to estimate the age of the cave paintings. If a particular sample taken from the Cauvet Cave contains 2% of the expected cabon 14, what is the approximate age of the sample?   "
},
{
  "id": "sec-firstlook-exercises-10",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-10",
  "type": "Checkpoint",
  "number": "1.11.9",
  "title": "",
  "body": " Consider the following predator-prey systems of differential equations   Which equation models the prey population and which equation models the predator population?  How does the prey population grow if there are no predators present?  What happens if there are a lot of prey present?    Think about the limit of the interaction term as the number of prey becomes very large.  "
},
{
  "id": "sec-firstlook-exercises-11",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-11",
  "type": "Checkpoint",
  "number": "1.11.10",
  "title": "WeBWorK Example.",
  "body": "WeBWorK Example   If is a solution to the differential equation find the value of the constant and the general solution to this equation.      (Use constants A, B, etc., for any constants in your solution formula.)             . Since , we must have . Therefore . The characteristic equation is , so or 5. Therefore .     "
},
{
  "id": "sec-firstlook-exercises-12",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-12",
  "type": "Checkpoint",
  "number": "1.11.11",
  "title": "WeBWorK Example 2.",
  "body": "WeBWorK Example 2   Just as there are simultaneous algebraic equations (where a pair of numbers have to satisfy a pair of equations) there are systems of differential equations, (where a pair of functions have to satisfy a pair of differential equations).  Indicate which pairs of functions satisfy this system. It will take some time to make all of the calculations.                          As you can see, finding all of the solutions, particularly of a system of equations, can be complicated and time consuming. It helps greatly if we study the structure of the family of solutions to the equations. Then if we find a few solutions we will be able to predict the rest of the solutions using the structure of the family of solutions.      "
},
{
  "id": "sec-firstlook-exercises-13",
  "level": "2",
  "url": "sec-firstlook-exercises.html#sec-firstlook-exercises-13",
  "type": "Checkpoint",
  "number": "1.11.12",
  "title": "WeBWorK Example 3.",
  "body": "WeBWorK Example 3   Let .  Find all values of such that satisfies the differential equation. If there is more than one correct answer, enter your answers as a comma separated list.             "
},
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "2",
  "title": "Chapter Title",
  "body": " Chapter Title   Text before the first section.    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
