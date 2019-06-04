import React, { Component } from 'react';
import './App.css';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faAirbnb,
  faPinterestP,
  faEbay,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Header,
  Menu,
  Segment,
  Divider,
  Grid,
  List,
  Button,
  // Label,
  Card,
  Image,
} from 'semantic-ui-react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
// import logo from './logo.svg';
import 'pure-react-carousel/dist/react-carousel.es.css';

class App extends Component {
  state = { activeItem: 'Personal Plans' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="App">
        <Container>
          <Header as="h2">Find a Plan</Header>
          <Segment className="main bd-bottom">
            <Menu tabular secondary>
              <Menu.Item
                name="Personal Plans"
                active={activeItem === 'Personal Plans'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Corporate Plans"
                active={activeItem === 'Corporate Plans'}
                onClick={this.handleItemClick}
              />
            </Menu>

            <Segment className="mb-0 bd-top-none ">
              <Header as="h5" className="pt-10">
                Curated for you. No Advance Deposits <br />
                Cancel Anytime
              </Header>

              <Grid columns={2} stackable className="ml-5 mr-5">
                <Grid.Column>
                  <Header as="h3">STANDARD</Header>
                  <p>
                    Starts from <Header as="h4">Rs.399/month</Header>
                    <br />
                    save up-to 2000on Yearly Billing
                  </p>
                  <Divider fitted />

                  <List floated="left" className="pr-5">
                    <List.Header as="h5" color="black" floated="left">
                      Top features
                    </List.Header>
                    <List.Item>
                      <List.Icon name="check" color="green" />
                      <List.Content>3 books at a time</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="check" color="green" />
                      <List.Content>Unlimited swaps</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="check" color="green" />
                      <List.Content>1 free Deliver/Month</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="check" color="green" />
                      <List.Content>Real world Class Books</List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>

                <Grid.Column verticalAlign="middle">
                  <Header as="h3">PLUS</Header>

                  <p>
                    Starts from <Header as="h4">Rs.799/month</Header>
                    <br />
                    save up-to 3000on Yearly Billing
                  </p>
                  <Divider fitted />

                  <List floated="left">
                    <List.Header as="h5" color="black" floated="left">
                      Top features
                    </List.Header>
                    <List.Item>
                      <List.Icon name="check" color="green" />
                      <List.Content>5 books at a time</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="check" color="green" />
                      <List.Content>
                        Exclusive Access to Events, <br />
                        Book Lunches
                      </List.Content>
                    </List.Item>
                    <Divider fitted />
                    <List.Item>
                      <List.Icon name="check" color="green" />
                      <List.Content>Unlimited Swaps</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="check" color="green" />
                      <List.Content>1 free Deliver/Month</List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid>

              <Divider vertical />
            </Segment>
          </Segment>
        </Container>
        <Segment className="bd-none">
          <Button.Group className="pr-5">
            <Button positive>Upgrade Now</Button>
          </Button.Group>
          <Button.Group className="pl-5">
            <Button positive>Upgrade Now</Button>
          </Button.Group>

          <Header as="h3">Thousands of happy customers, including:</Header>

          <List vertical>
            <List.Item>
              <List horizontal className="cgray">
                <List.Item>
                  <FontAwesomeIcon icon={faAirbnb} size="3x" />
                  <List.Content verticalAlign="middle">airbnb</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                  <List.Content verticalAlign="middle">Facebook</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon icon={faEbay} size="3x" />
                  <List.Content verticalAlign="middle">Ebay</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon
                    icon={faPinterestP}
                    size="3x"
                    color="lightgray"
                  />
                  <List.Content verticalAlign="middle">Pinterest</List.Content>
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              <List horizontal className="cgray">
                <List.Item>
                  <FontAwesomeIcon icon={faAirbnb} size="3x" />
                  <List.Content verticalAlign="middle">airbnb</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                  <List.Content verticalAlign="middle">Facebook</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon icon={faEbay} size="3x" />
                  <List.Content verticalAlign="middle">Ebay</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon
                    icon={faPinterestP}
                    size="3x"
                    color="lightgray"
                  />
                  <List.Content verticalAlign="middle">Pinterest</List.Content>
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              <List horizontal className="cgray">
                <List.Item>
                  <FontAwesomeIcon icon={faAirbnb} size="3x" />
                  <List.Content verticalAlign="middle">airbnb</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                  <List.Content verticalAlign="middle">Facebook</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon icon={faEbay} size="3x" />
                  <List.Content verticalAlign="middle">Ebay</List.Content>
                </List.Item>

                <List.Item>
                  <FontAwesomeIcon
                    icon={faPinterestP}
                    size="3x"
                    color="lightgray"
                  />
                  <List.Content verticalAlign="middle">Pinterest</List.Content>
                </List.Item>
              </List>
            </List.Item>
          </List>

          <a href="/" color="blue">
            {`Here's what our customers has to say >`}
          </a>
        </Segment>
        <div className="ui section divider" />

        <Segment>
          <Header as="h2" className="pb-3">
            <List.Icon name="heart outline" color="red" /> From Our Wall of Love
          </Header>

          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <ButtonBack className="forward">
              <List.Icon name="chevron left" />
            </ButtonBack>
            <ButtonNext className="backward">
              <List.Icon name="chevron right" />
            </ButtonNext>
            <Slider>
              <Slide index={0}>
                <Card.Group centered>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header floated="left">Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Slide>
              <Slide index={1}>
                <Card.Group centered>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Slide>
              <Slide index={2}>
                <Card.Group centered>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group{' '}
                        <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Slide>
            </Slider>
          </CarouselProvider>

          <Segment className="bg-orange slack">
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <FontAwesomeIcon color="white" icon={faSlack} size="8x" />
              </Grid.Column>
              <Grid.Column className="alignLeft">
                <Header as="h3" className="white">
                  Slack for Good
                </Header>
                <p>
                  {`Slack wants to support people in the world who are doing good
                  things. That's why we offer special discount pricing for
                  qualified non-profit orgn=anizations and educationsal
                  institutes.`}
                </p>
                <p className="fw-600">
                  {`Learn more about Slack for Non-profit ->`}
                  <br />
                  {`Learn more about Slack for Educationt ->`}
                </p>
              </Grid.Column>
            </Grid>

            <Divider vertical />
          </Segment>

          <Segment className="bd-none">
            <Header as="h1">Frequently Asked Questions</Header>

            <List divided verticalAlign="middle" className="faq">
              <List.Item>
                <List.Content floated="right">
                  <List.Icon
                    name="plus square outline"
                    size="large"
                    color="blue"
                  />
                </List.Content>

                <List.Content floated="left">
                  Can i upgrade Slack just for myself ?
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <List.Icon
                    name="plus square outline"
                    size="large"
                    color="blue"
                  />
                </List.Content>

                <List.Content floated="left">
                  Can i upgrade Slack just for myself ?
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <List.Icon
                    name="plus square outline"
                    size="large"
                    color="blue"
                  />
                </List.Content>

                <List.Content floated="left">
                  Can i upgrade Slack just for myself ?
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <List.Icon
                    name="plus square outline"
                    size="large"
                    color="blue"
                  />
                </List.Content>

                <List.Content floated="left">
                  Can i upgrade Slack just for myself ?
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default App;
