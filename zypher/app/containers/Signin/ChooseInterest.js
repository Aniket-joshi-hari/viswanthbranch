import React, {Component} from "react";
import { withStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";

const tagsList = [ {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/advenuture_small.jpg",
      "tagName": "Adventure"
    },
    {
        "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/classics_small.jpg",
        "tagName": "Classic"
    },
    {       
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/contemporary_small.jpg",
      "tagName": "Comtemporary"
  },
  {
    "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/fantasy_small.jpg",
    "tagName": "Fantasy"
},
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/horror_small.jpg",
  "tagName": "horror"
},
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/humour_small.jpg",
  "tagName": "humuor"
},
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/lite_small.jpg",
  "tagName": "IndianLiterature"
},
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/mystery_small.jpg",
  "tagName": "Mystery"
},
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/hf_small.jpg",
  "tagName": "historicalFiction"
},
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/mythology_small.jpg",
  "tagName": "Mythology"
}
,
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/romance_small.jpg",
  "tagName": "Romance"
}
,
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/short_small.jpg",
  "tagName": "ShortStories"
},
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/sciene_fiction_small.jpg",
  "tagName": "ScienceFiction"
}
,
{
  "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/thriller_wide.jpg",
  "tagName": "Thriller"
},
 {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/business_small.jpg",
      "tagName": "Business"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/health_small.jpg",
      "tagName": "health"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/economics_small.jpg",
      "tagName": "Economics"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/entre_small.jpg",
      "tagName": "Entreprenuership"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/fantasy_small.jpg",
      "tagName": "Finance"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/growth_small.jpg",
      "tagName": "Growth"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/insp_small.jpg",
      "tagName": "Inspiraton"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/leadership_small.jpg",
      "tagName": "Leadership"
    },
    
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/management_small.jpg",
      "tagName": "Management"
    },
    {
      "imageURL":"https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/motivational_small.jpg",
      "tagName": "Motivational"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/philosopshy_small.jpg",
      "tagName": "Philosophy"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/politics_wide.jpg",
      "tagName": "Politics"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/psychology_small.jpg",
      "tagName": "Psychology"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/science_small.jpg",
      "tagName": "Science"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/self_help_small.jpg",
      "tagName": "Self-help"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/socio_small.jpg",
      "tagName": "Sociology"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/spritual_small.jpg",
      "tagName": "Spiritual"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/strategy_small.jpg",
      "tagName": "Strategy"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/tech_small.jpg",
      "tagName": "Technology"
    },
    {
      "imageURL": "https://zobjects.sgp1.digitaloceanspaces.com/hashtags-small/true_accoutn_small.jpg",
      "tagName": "True Accounts"
    }
];


const styles = theme => ({
  containerCardStyle: {
    marginLeft: 10,
    // paddingLeft: isMobile ? 0 : 48,
    padding: 30,
    paddingTop: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardStyle: {
    width: 300,
    height: 150,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
  },
  imageHolderStyle: {
    // textAlign: 'center',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // paddingBottom: 10,
  },
  image: {
    maxWidth: 300,
    height: 150,
    // maxHeight: 250
  }
});

class ChooseInterest extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedInterest: []
        };
    }
    render(){
        const {classes} = this.props;
        return(
            <>
              <h1>Choose Interest</h1>
              <main id="interests" className={classes.containerCardStyle}>
                {tagsList.map((tag, idx) => (
                  <Card key={idx} className={classes.cardStyle}>
                    {/* <Author data={tag} /> */}
                    <div className={classes.imageHolderStyle}>
                      <img
                        src={tag.imageURL}
                        className={classes.image}
                        alt={tag.tagName}
                      />
                      {/* <span>{tag.tagName}</span> */}
                    </div>
                  </Card>
                ))}
              </main>
            </>
        );
    }
}

export default withStyles(styles)(ChooseInterest);
